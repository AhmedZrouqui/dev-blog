'use client';

import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import dynamic from 'next/dynamic';

const EditorPage: NextPage = () => {
  const Editor = dynamic(import('../components/editor'), { ssr: false });
  return (
    <div>
      <Editor />
    </div>
  );
};

export default EditorPage;
