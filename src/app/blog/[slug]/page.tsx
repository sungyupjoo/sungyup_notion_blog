import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await fetchBySlug(params.slug);
  if (!page) {
    return <div>Post not found</div>;
  }
  const blocks = await fetchPageBlocks(page.id);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
