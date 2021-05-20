import React from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

interface ButtonProps {
  primary?: boolean;
  children: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, onClick, primary } = props;

  const classes = classNames(
    styles.btn,
    { [styles.primary]: primary },
  );
  return (
    <button className={classes} type="button" onClick={onClick}>{children}</button>
  );
};
export default Button;
