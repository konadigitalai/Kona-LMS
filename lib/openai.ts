import { OpenAI } from 'openai';

import logger from './logger';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getAskAIAnswer = async (question: string, userId: string) => {
  const prompt = `${question}.don't answer if question is not related to software industry. Format the response in markdown format.`;
  return getChatGPTResponse(prompt, userId);
};

export const generateCourseDescription = async (courseNmae: string, userId: string) => {
  const prompt = `Short description for ${courseNmae} course, maximum 100 words.`;
  return getChatGPTResponse(prompt, userId);
};

export const getChatGPTResponse = async (prompt: string, uniqueId: string) => {
  logger.info(
    {
      prompt,
      uniqueId,
    },
    'Getting response from OpenAI'
  );
  let answer: string;
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      user: String(uniqueId),
      messages: [
        {
          content: prompt,
          role: 'user',
        },
      ],
    });
    answer = response.choices[0].message?.content || '';
    logger.info(
      {
        answer,
        uniqueId,
      },
      'Got response from OpenAI'
    );
  } catch (error) {
    logger.error(
      {
        error,
        uniqueId,
      },
      'Error while getting response from OpenAI'
    );
    answer =
      'Sorry, AI responses are not available currently. Please contact support team for any further assistance.';
  }

  return answer;
};

export default openai;
