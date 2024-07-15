import React, { useRef, useEffect } from 'react';

import { BentoGridItem } from './card';

export const AllProjects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (containerRef.current) {
        const container = containerRef.current;
        container.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      if (containerRef.current) {

        const container = containerRef.current;
        const isAtTop = container.scrollTop === 0;
        const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;

        if (!isAtTop && !isAtBottom) {
          event.stopPropagation(); 
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="w-10/12 h-[80vh] overflow-y-scroll flex flex-wrap p-16 gap-24 items-center justify-center"
      ref={containerRef}
    >
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
      <BentoGridItem />
    </div>
  );
};
