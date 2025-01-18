import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { fetchPages } from '@/lib/notion';

export default async function Home() {
  const posts = await fetchPages();
  return (
    <main>
      {posts.results.map((post) => (
        <div key={post.id}>
          {(post as PageObjectResponse).properties.이름.title[0].plain_text}
        </div>
      ))}
    </main>
  );
}
