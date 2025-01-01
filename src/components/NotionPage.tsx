'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import 'react-notion-x/src/styles.css';
import { NotionRenderer } from 'react-notion-x';

const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  const Code = dynamic(
    () =>
      import('react-notion-x/build/third-party/code').then((mod) => mod.Code),
    { ssr: false }
  );
  const Collection = dynamic(
    () =>
      import('react-notion-x/build/third-party/collection').then(
        (mod) => mod.Collection
      ),
    { ssr: false }
  );
  const Equation = dynamic(
    () =>
      import('react-notion-x/build/third-party/equation').then(
        (mod) => mod.Equation
      ),
    { ssr: false }
  );
  const Modal = dynamic(
    () =>
      import('react-notion-x/build/third-party/modal').then((mod) => mod.Modal),
    { ssr: false }
  );
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        showTableOfContents={true}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          nextImage: Image,
          nextLink: Link,
        }}
      />
    </div>
  );
};

export default NotionPage;
