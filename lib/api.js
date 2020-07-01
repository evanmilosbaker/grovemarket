import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})
const parseContent = (entries) => ({
    coverPhoto: entries.items[0].fields.coverPhoto.fields.file.url,
    menu: entries.items[0].fields.dinnerMenu,
    about: entries.items[0].fields.about
});

export const getContent = async () => {
  const entries = await client.getEntries();
  const content = parseContent(entries);
  return content;
}
