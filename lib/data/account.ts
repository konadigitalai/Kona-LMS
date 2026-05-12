import { z } from 'zod';
import { accountSchema } from '../schemas/account';

const accounts = [
  {
    name: 'Digital Lync',
    supportEmail: 'support@digital-lync.com',
    maxPasswordResetLinksADay: 3,
    contactPage: 'https://www.digital-lync.com/career.html',
    connectLoginPage: 'https://connect.digitallync.ai/auth/auth0',
    logo: '/logos/digitallync.png',
    logoDimensions: {
      width: 200,
      height: 50,
    },
    landingPageImage:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/illustration-login-knFnLCtOkTplhRo12wQOmwXEbreeJA.jpg',
    favicon:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/logo-without-text-ZiFjwwBPJhhi1yws8Lefjnd6pMyz5O.png',
  },
  {
    name: 'Nexa Design',
    supportEmail: 'hello@nexadesign.ai',
    maxPasswordResetLinksADay: 3,
    contactPage: 'https://www.nexadesign.ai/career.html',
    connectLoginPage: 'https://connect.nexadesign.ai/auth/auth0',
    logo: '/logos/nexadesign.svg',
    logoDimensions: {
      width: 100,
      height: 400,
    },
    landingPageImage:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/nexadesign1-dgcnD8E1DgzihXOpgF58Q6wKES3FYe.jpg',
    favicon:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/SMM-Logo-eNU8Rd7aTCRu2VILhyVabx9EmZlNAx.png',
  },
  {
    name: 'Skill Capital',
    supportEmail: 'hello@skill-capital.com',
    maxPasswordResetLinksADay: 3,
    contactPage: 'https://skill-capital.com/contactus.html',
    connectLoginPage: 'https://connect.skill-capital.com/auth/auth0',
    logo: '/logos/skill-capital.png',
    logoDimensions: {
      width: 200,
      height: 60,
    },
    landingPageImage:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/skill-capital-banner-gBItUIw88otVCsteb5vRwUZSfWQlm8.jpg',
    favicon:
      'https://3ro8b0zdvxfbk7jy.public.blob.vercel-storage.com/skillcapital-favicon-69EU72wDU5UrocvWp7o1co0y1cD4Pj.png',
  },
];

const accountId = z.coerce.number().parse(process.env.NEXT_PUBLIC_ACCOUNT);
const account = accountSchema.parse(accounts[accountId]);

export default account;
