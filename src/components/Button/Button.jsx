import s from './Button.module.scss';

const Button = ({ onClick, text, name }) => {
  return (
    <button type="button" onClick={onClick} className={s[name]}>
      {text}
    </button>
  );
};

export default Button;
