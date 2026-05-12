import { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '@azure/storage-blob';
import { z } from 'zod';
import withApiAuthorizationRequired from '../../../lib/withApiAuthorizationRequired';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { generateCourseDescription } from '../../../lib/openai';
import { getSessionOrThrow } from '../../../lib/auth-utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Extract this to a separate function and use it in all API routes
  if (!['POST'].includes(z.string().parse(req.method))) {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  if (req.method === 'POST') {
    return POST(req, res);
  }
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSessionOrThrow(req, res);
  let data;
  try {
    data = z
      .object({ prompt: z.string().min(1), type: z.literal('course_description') })
      .parse(req.body);
  } catch (error) {
    logger.error(error);
    return res.json({
      result: 'error',
      error: 'Please enter correct prompt.',
    });
  }

  let text;
  if (data.type === 'course_description') {
    text = await generateCourseDescription(data.prompt, session.user.sub);
  }

  return res.json({
    text,
  });
}

export default withApiAuthorizationRequired(withApiAuthRequired(handler), 'utils:generate_text');
