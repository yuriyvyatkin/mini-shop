import cn from "classnames";
import styles from './styles.module.scss';

type TabProps = {
  isActiveTab: boolean;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  tabBtnClickHandler: () => void;
};

const Tab: React.FC<TabProps> = ({ isActiveTab, text, icon: Icon, tabBtnClickHandler: handleTabBtnClick }) => {
  return (
    <div className={cn(styles.tab, isActiveTab && styles.tab_active)}>
      <div className={cn(styles.tab__icon, isActiveTab && styles.tab_active__icon)}><Icon /></div>
      <span className={styles.tab__name}>{text}</span>
      <div className={cn(styles.tab__status, isActiveTab && styles.tab_active__status)} onClick={handleTabBtnClick}></div>
    </div>
  );
};

export default Tab;
