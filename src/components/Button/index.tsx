import styles from "./index.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  buttonStyle,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${buttonStyle}`]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
