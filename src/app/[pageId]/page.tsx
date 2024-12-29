import { Metadata } from 'next';
import { getPageTitle } from 'notion-utils';
import { notion } from '../page';
import React from 'react';
import NotionPage from '@/components/NotionPage';

interface fetchEachPagesProps {
  params: {
    pageId: string;
  };
}
const fetchEachPages = async ({ params }: fetchEachPagesProps) => {
  const { pageId } = await params;
  try {
    const recordMap = await notion.getPage(pageId);
    return <NotionPage recordMap={recordMap} />;
  } catch (error) {
    return <div>Error fetching page</div>;
  }
};

export default fetchEachPages;
