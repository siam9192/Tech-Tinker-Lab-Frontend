'use client';
import React, { useRef, useState } from 'react';
import ReactQuill, { UnprivilegedEditor } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import './TextEditor.css';
import { Editor } from '@tinymce/tinymce-react';

interface ITextEditorProps {
  onChange: (value: string) => void;
}

function TextEditor({ onChange }: ITextEditorProps) {
  const editorRef = useRef<any>(null);

  const handelEditorChange = (value: string) => {
    onChange(value);
  };

  return (
    <>
      <Editor
        apiKey="k9ictli0yibr0g196a3ty6utu4dgzcy7xrg2ucqxo4e2ehpb"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }',
        }}
        onEditorChange={handelEditorChange}
      />
    </>
  );
}

export default TextEditor;
