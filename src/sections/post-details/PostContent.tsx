'use client';

import { useEffect, useRef } from 'react';

interface IPostContentProps {
  content: string;
}

function PostContent({ content }: IPostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contentEle = contentRef.current;
    if (contentEle && typeof document !== "undefined") {
      contentEle.innerHTML = content;
      document.body.style.overflowX = 'hidden';
    }
  }, [contentRef.current]);
  return (
    <section className="dark:text-slate-100">
      <div ref={contentRef} />
    </section>
  );
}

export default PostContent;
