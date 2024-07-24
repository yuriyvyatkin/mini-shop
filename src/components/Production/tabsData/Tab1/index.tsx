import slides from "@/constants/slides";
import Button from "@/components/common/Button";
import Slider from "@/components/common/Slider";
import styles from "./styles.module.scss";

const Tab1 = () => {
  const handleScrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.content__column}>
        <p className={styles.content__text}>
          В штате нашего рекламного агентства трудятся только профессиональные дизайнеры. Макет разрабатывается с учетом индивидуальных особенностей и пожеланий клиента. Поможем разработать <strong>дизайн баннеров, вывесок, флагов а также фирменный стиля и именную продукцию компании.</strong>
        </p>

        <div className={styles.content__list}>
          <div className={styles.content__list__header}>Предоплата</div>
          <ul className={styles.content__list__points}>
            <li>Согласование стоимости работ</li>
            <li><b>50%</b> Предоплата</li>
            <li>Приступаем к работе</li>
          </ul>
        </div>

        <div className={styles.content__list}>
          <div className={styles.content__list__header}>Разработка и правки</div>
          <ul className={styles.content__list__points}>
            <li>Часовая ставка <b>- 1200 р/час</b></li>
            <li>Один макет - <b>3000 р.</b></li>
            <li><b>Одна</b> итерация правок <b>- 500 р.</b></li>
          </ul>
        </div>

        <Button text="Заказать" clickHandler={handleScrollToContacts} />
      </div>

      <Slider slides={slides} />
    </>
  );
};

export default Tab1;
