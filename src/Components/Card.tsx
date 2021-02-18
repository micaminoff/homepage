import { FC, useEffect, useRef, useState } from 'react';

type CardTypes = {
  name: string;
  title?: string;
  children: React.ReactNode;
};

/* Classic card with cool sliding in animation
 *  Animation code from https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/
 */
export const Card: FC<CardTypes> = ({ name, children }) => {
  const [isVisible, setVisibility] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => setVisibility(entry.isIntersecting))
    );
    const node = domRef.current;

    if (node) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
  return (
    <div
      id={name}
      ref={domRef}
      className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};
