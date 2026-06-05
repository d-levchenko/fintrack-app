'use client';

import css from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={css.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
