'use client';

import React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import RenderBlock from './RenderBlock';

const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  const blockIds = Object.keys(recordMap.block);
  return (
    <div>
      {blockIds.map((blockId) => (
        <RenderBlock key={blockId} blockId={blockId} recordMap={recordMap} />
      ))}
      {/* <pre style={{ padding: 20, overflow: 'auto' }}>
        {JSON.stringify(
          Object.entries(recordMap.block).map(([id, block]) => ({
            id,
            type: block.value.type,
            properties: block.value.properties,
          })),
          null,
          2
        )}
      </pre> */}
    </div>
  );
};

export default NotionPage;
