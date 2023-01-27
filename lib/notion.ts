const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getAllPublished() {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    },
    sorts: [{ property: 'Date', direction: 'descending' }]
  });
  const allPosts = posts.results;
  return allPosts.map((post: any) => {
    return getPageMetaData(post);
  });
}

function getPageMetaData(post: any) {
  const getTags = (tags: { name: string }[]) => tags.map((tag) => tag.name);
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text
  };
}

function getToday(dateString: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let date = new Date();
  if (dateString) {
    date = new Date(dateString);
  }
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;
  return today;
}
