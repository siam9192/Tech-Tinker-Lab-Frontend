'use client';
import React, { useRef, useState } from 'react';
import ReactQuill, { UnprivilegedEditor } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import './TextEditor.css';
import { Range } from 'postcss/lib/node';

interface ITextEditorProps {
  onChange: (value: string) => void;
  defaultValue?: string;
}

function TextEditor({ onChange, defaultValue }: ITextEditorProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }], // Heading options: H1, H2, and normal text
        [{ size: ['200px'] }],
        ['bold', 'italic', 'underline'], // Other formatting options
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'], // Remove formatting button
      ],
    },
  };

  const handelEditorChange = (value: string) => {
    onChange(value);
  };

  return (
    <section>
      <ReactQuill
        modules={modules}
        onChange={handelEditorChange}
        defaultValue={defaultValue}
        className="dark:bg-dark-light dark:text-white font-secondary "
      />
      <input
        ref={imageInputRef}
        accept="image/*"
        type="file"
        className="hidden"
      />
    </section>
  );
}

export default TextEditor;
