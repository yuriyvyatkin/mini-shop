import { useState, Suspense } from 'react';
import tabs from "@/constants/tabs";
import Tab from "@/components/common/Tab";
import styles from "./styles.module.scss";

const Production = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNum: number) => {
    setActiveTab(tabNum);
  }

  const ActiveComponent = tabs[activeTab].data;

  return (
    <div>
      <h2 className={styles.header}>
        Изготовление
      </h2>

      <div className={styles.tabs}>
        {tabs.map(({ text, icon }, index) => (
          <Tab isActiveTab={activeTab === index} text={text} icon={icon} key={`tab-${index}`} tabBtnClickHandler={() => handleTabClick(index)} />
        ))}
      </div>

      <div className={styles.content}>
        <Suspense>
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default Production;
