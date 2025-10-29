import styles from './style.module.css';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Modal = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return <div className={styles.modal}>{children}</div>;
};
