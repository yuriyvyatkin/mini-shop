import React from 'react';
import Mark from "@/assets/contacts/mark.svg";
import cn from "classnames";
import styles from './styles.module.scss';

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, checked, changeHandler: handleChange }) => {
  return (
    <div className={styles.checkbox}>
      <label className={styles.checkbox__label}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
          className={styles.checkbox__input}
        />

        <span className={styles.checkbox__checkmarkBox}>
          <Mark className={cn(styles.checkbox__checkmark, checked && styles.checkbox_active__checkmark)} />
        </span>

        {label}
      </label>
    </div>
  );
};

export default Checkbox;
