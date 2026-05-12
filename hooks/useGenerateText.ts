import { useQuery } from '@tanstack/react-query';
import http from '../lib/http-client';

function useGenerateText(prompt: string | null) {
  const query = useQuery({
    queryKey: ['generate_text', prompt],
    queryFn: async () => {
      const res = await http.post('/api/utils/generate-text', {
        prompt,
        type: 'course_description',
      });

      return res.data;
    },
    enabled: Boolean(prompt),
  });

  return query;
}

export default useGenerateText;
