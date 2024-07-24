import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  clickHandler?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
};

const Button: React.FC<ButtonProps> = ({ text, clickHandler, type = "button" }) => {
  return (
    <button className={styles.button} type={type} onClick={clickHandler ? (event) => clickHandler(event) : clickHandler}>
      {text}
    </button>
  );
};

export default Button;
