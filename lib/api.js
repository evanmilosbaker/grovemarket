import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})
const parseContent = (entries) => {
  const { fields } = entries.items[0];
  return fields
};

export const getContent = async () => {
  const entries = await client.getEntries();
  const content = parseContent(entries);
  return content;
}
