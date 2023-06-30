import EditorJS from '@editorjs/editorjs';
import React, { useEffect, useRef } from 'react';
import Header from '@editorjs/header';
import ImageClass from './editor_classes/Image';

function Editor() {
  const editorRef = useRef(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'holder',
      autofocus: true,
      onReady() {
        editorRef.current = editor;
      },
      async onChange() {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        header: Header,
        image: ImageClass,
      },
    });
  };

  useEffect(() => {
    if (editorRef.current === null) initEditor();
    return () => {
      if (editorRef.current) {
        editorRef?.current?.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="holder"></div>
    </div>
  );
}

export default Editor;
