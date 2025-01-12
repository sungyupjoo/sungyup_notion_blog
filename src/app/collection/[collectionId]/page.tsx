import React from 'react';
import { notion } from '@/lib/notion';

const CollectionPage = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const { collectionId } = await params;
  const response = await fetchCollectionData(collectionId);
  return (
    <div style={{ padding: '16px' }}>
      <h1>Collection ID: {collectionId}</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default CollectionPage;

async function fetchCollectionData(collectionId: string) {
  const response = await notion.databases.query({ database_id: collectionId });
  return response;
}
