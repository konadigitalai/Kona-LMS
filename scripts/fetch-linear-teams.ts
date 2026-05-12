import { LinearClient } from '@linear/sdk';
import dotenv from 'dotenv';

dotenv.config();
const linear = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY,
});

async function main() {
  const data = await linear.teams({});
  console.log(
    data.nodes.map((i) => ({
      name: i.name,
      id: i.id,
    }))
  );
}

main();
