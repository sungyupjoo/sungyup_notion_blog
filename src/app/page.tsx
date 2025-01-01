import NotionPage from '@/components/NotionPage';
import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
});

export default async function Home() {
  if (process.env.NOTION_PAGE_ID) {
    const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID);
    console.log(recordMap.collection);
    return (
      <main>
        <NotionPage recordMap={recordMap} />
      </main>
    );
  } else return <div>No page id</div>;
}
