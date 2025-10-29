import styles from './style.module.css';

type ButtonProps = {
  text: string;
  size?: 'sm' | 'md';
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  text,
  size = 'sm',
  type = 'button',
  isLoading = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${size === 'md' ? styles.medium : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
    >
      {isLoading ? 'Загрузка' : text}
    </button>
  );
};
