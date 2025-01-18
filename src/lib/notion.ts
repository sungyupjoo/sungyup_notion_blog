import { Client } from '@notionhq/client';
import 'server-only';
import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    // filter: {
    //   property: 'Tags',
    //   select: {
    //     equals: 'web',
    //   },
    // },
  });
});

export const fetchBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});
