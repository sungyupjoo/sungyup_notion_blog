import Link from 'next/link';

type BlockComponentProps = {
  block: any;
  children?: React.ReactNode;
};

function PageBlock({ block }: BlockComponentProps) {
  const textArray = block.value?.properties?.title ?? [];
  const textContent = textArray.map((chunk: any) => chunk[0]).join('');
  return <h1>{textContent}</h1>;
}

function ColumnListBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function CollectionViewPageBlock({ block }: BlockComponentProps) {
  const collectionId = block.value.collection_id;
  return (
    <div>
      <Link href={`/collection/${collectionId}`}>{block.value.type}</Link>
      <div>{collectionId}</div>
    </div>
  );
}

function ParagraphBlock({ block }: BlockComponentProps) {
  const textArray = block.value?.properties?.title ?? [];
  const textContent = textArray.map((chunk: any) => chunk[0]).join('');

  return <p>{textContent}</p>;
}

function HeaderBlock({ block }: BlockComponentProps) {
  const textArray = block.value?.properties?.title ?? [];
  const textContent = textArray.map((chunk: any) => chunk[0]).join('');
  return <h2>{textContent}</h2>;
}

function SubHeaderBlock({ block }: BlockComponentProps) {
  const textArray = block.value?.properties?.title ?? [];
  const textContent = textArray.map((chunk: any) => chunk[0]).join('');
  return <h3>{textContent}</h3>;
}

function CodeBlock({ block }: BlockComponentProps) {
  const textArray = block.value?.properties?.title ?? [];
  const code = textArray.map((chunk: any) => chunk[0]).join('\n');
  const language = block.value?.properties?.language?.[0]?.[0] || '';

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

function NumberedListBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function BulletListBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function ImageBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function SubSubHeaderBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function QuoteBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function ToggleBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

function ToDoBlock({ block }: BlockComponentProps) {
  return <div>{block.value.type}</div>;
}

export const blockComponents: Record<string, React.FC<BlockComponentProps>> = {
  page: PageBlock,
  column: ColumnListBlock,
  column_list: ColumnListBlock,
  collection_view_page: CollectionViewPageBlock,
  paragraph: ParagraphBlock,
  text: ParagraphBlock,
  header: HeaderBlock,
  sub_header: SubHeaderBlock,
  code: CodeBlock,
  numbered_list: NumberedListBlock,
  bulleted_list: BulletListBlock,
  image: ImageBlock,
  sub_sub_header: SubSubHeaderBlock,
  quote: QuoteBlock,
  toggle: ToggleBlock,
  to_do: ToDoBlock,
};
