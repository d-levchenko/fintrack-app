'use client';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
}

const Button = ({ text, onClick, style }: ButtonProps) => {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
