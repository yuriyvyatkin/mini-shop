import React from 'react';
import styles from './styles.module.scss';

type InputProps = {
  name: string;
  value: string;
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({ name, value, inputHandler: handleInput, label, type = "text", required = false }) => {
  return (
    <div className={styles.inputGroup}>
      <input
        className={styles.inputGroup__input}
        type={type}
        name={name}
        value={value}
        onChange={handleInput}
        required={required}
      />

      <span className={styles.inputGroup__highlighter} />

      <span className={styles.inputGroup__bar} />

      <label className={styles.inputGroup__label}>{label}</label>
    </div>
  );
};

export default Input;
