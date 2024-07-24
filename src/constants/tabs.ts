import Flag from '@/assets/tab-icons/flag.svg';
import Img from '@/assets/tab-icons/img.svg';
import Printer from '@/assets/tab-icons/printer.svg';
import Nut from '@/assets/tab-icons/nut.svg';
import { lazy } from 'react';

const Tab1 = lazy(() => import('@/components/Production/tabsData/Tab1'));
const Tab2 = lazy(() => import('@/components/Production/tabsData/Tab2'));
const Tab3 = lazy(() => import('@/components/Production/tabsData/Tab3'));
const Tab4 = lazy(() => import('@/components/Production/tabsData/Tab4'));

const tabs = [
  { text: "Услуги дизайна", icon: Img, data: Tab1 },
  { text: "Изготовление рекламной продукции", icon: Printer, data: Tab2 },
  { text: "Изготовление вывесок и флагов", icon: Flag, data: Tab3 },
  { text: "Прочие услуги", icon: Nut, data: Tab4 },
];

export default tabs;
