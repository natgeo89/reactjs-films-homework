import React from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

interface ButtonProps {
  className?: string;
  children: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => { 
  const { children, onClick, className } = props;
  const classes = classNames(
    styles.btn,
    className,
  );
  return (
    <button className={classes} type="button" onClick={onClick}>{children}</button>
  );
};
export default Button;
