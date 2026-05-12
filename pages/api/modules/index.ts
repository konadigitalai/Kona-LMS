// pages/api/modules/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';
import { idSchema, addModuleSchema } from '../../../lib/schemas/zod-schemas';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import withApiAuthorizationRequired from '../../../lib/withApiAuthorizationRequired';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  try {
    // Validate and parse incoming data
    const { title, courseId } = addModuleSchema
      .extend({
        courseId: idSchema,
      })
      .parse(req.body);

    let newModule;

    // Use tx (not db) inside transaction
    await db.$transaction(async (tx) => {
      newModule = await tx.module.create({
        data: {
          title,
          course: {
            connect: {
              id: courseId,
            },
          },
        },
      });

      await tx.course.update({
        where: {
          id: courseId,
        },
        data: {
          modulesOrder: {
            push: newModule.id,
          },
        },
      });
    });

    return res.status(201).json(newModule);
  } catch (error: any) {
    console.error('❌ Error creating module:', error);

    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', issues: error.errors });
    }

    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}

export default withApiAuthorizationRequired(
  withApiAuthRequired(handler),
  'update:courses'
);
