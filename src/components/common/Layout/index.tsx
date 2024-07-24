import { ReactNode } from 'react';
import styles from './styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
