import { ExtendedRecordMap } from 'notion-types';
import React from 'react';
import { blockComponents } from './Block';

const RenderBlock = ({
  blockId,
  recordMap,
}: {
  blockId: string;
  recordMap: ExtendedRecordMap;
}) => {
  const block = recordMap.block[blockId];
  if (!block) return null;

  const BlockComponent = blockComponents[block.value.type] || DefaultBlock;

  let children = null;
  if (block.value.content && block.value.content.length > 0) {
    children = block.value.content.map((childId: string) => (
      <RenderBlock key={childId} blockId={childId} recordMap={recordMap} />
    ));
  }
  return <BlockComponent block={block}>{children}</BlockComponent>;
};

export default RenderBlock;

function DefaultBlock({
  block,
  children,
}: {
  block: any;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ border: '1px solid red', padding: 8, margin: 8 }}>
      <div>Unsupported block type: {block.value.type}</div>
      {children}
    </div>
  );
}
