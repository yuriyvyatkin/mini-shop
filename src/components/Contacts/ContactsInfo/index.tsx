import Location from "@/assets/contacts/location.svg";
import Mail from "@/assets/contacts/mail.svg";
import Phone from "@/assets/contacts/phone.svg";
import styles from './styles.module.scss';

const ContactsInfo = () => {
  return (
    <div className={styles.column}>
      <h2 className={styles.header}>
        Контакты
      </h2>

      <span className={styles.column__title}>
        Адрес
      </span>

      <div className={styles.column__contact}>
        <div className={styles.column__contact__icon}>
          <Location />
        </div>

        <span className={styles.column__contact__name}>
          г. Краснодар<br />ул. Бабушкина 110, офис 4
        </span>
      </div>

      <span className={styles.column__title}>
        Контакты
      </span>

      <div className={styles.column__contact}>
        <div className={styles.column__contact__icon}>
          <Mail />
        </div>

        <span className={styles.column__contact__name}>
          ra-matina@mail.ru
        </span>
      </div>

      <div className={styles.column__contact}>
        <div className={styles.column__contact__icon}>
          <Phone />
        </div>

        <span className={styles.column__contact__name}>
          8 (861) 246-33-36
        </span>
      </div>

      <div className={styles.column__contact}>
        <div className={styles.column__contact__icon}>
          <Phone />
        </div>

        <span className={styles.column__contact__name}>
          8 (901) 490-46-46
        </span>
      </div>
    </div>
  );
};

export default ContactsInfo;
