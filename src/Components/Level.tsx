import { FC } from 'react';

/* Horizontal flex container */
type LevelProps = {
  name: string;
  children: React.ReactNode;
};

export const Level: FC<LevelProps> = ({ children, name }) => (
  <section className='level' id={name}>
    {children}
  </section>
);
