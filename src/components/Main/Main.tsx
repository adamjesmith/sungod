import s from './Main.module.css';

import clsxm from '@/lib/clsxm';

interface MainProps {
  className?: string;
  children: React.ReactNode;
}

export default function Main({ className, children }: MainProps) {
  const rootClassName = clsxm(s.root, className);

  return <main className={rootClassName}>{children}</main>;
}
