import { useState } from 'react';
import ContactsInfo from "./ContactsInfo";
import { toast, ToastContainer } from 'react-toastify';

import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import Button from "@/components/common/Button";
import styles from "./styles.module.scss";

const Contacts = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    consent: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, phone, consent } = formValues;

    if (!name.trim() || !phone.trim()) {
      toast.warning('Заполните пожалуйста все поля');
      return;
    }

    if (!/^\d{10,15}$/.test(phone)) {
      toast.warning('Введите пожалуйста от 10 до 15 цифр вашего номера телефона');
      return;
    }

    if (consent === false) {
      toast.warning('Подтвердите пожалуйста обработку персональных данных');
      return;
    }

    toast.success('Форма успешно отправлена!');
  };

  return (
    <div className={styles.contacts} id="contacts">
      <ContactsInfo />

      <form className={styles.form} noValidate onSubmit={handleFormSubmit}>
        <div className={styles.form__header}>
          Заказать звонок
        </div>

        <Input
          name="name"
          value={formValues.name}
          inputHandler={handleInputChange}
          label="Имя"
          required
        />

        <Input
          name="phone"
          value={formValues.phone}
          inputHandler={handleInputChange}
          label="Телефон"
          required
        />

        <Checkbox
          id="consent"
          name="consent"
          label="Согласие на обработку персональных данных"
          checked={formValues.consent}
          changeHandler={handleInputChange}
        />

        <Button text="Отправить" type="submit" />
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contacts;
