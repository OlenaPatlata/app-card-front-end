import s from './Title.module.scss';

const Title = ({ title, name }) => {
  return (
    <div className={s.titleWrapper}>
      <h2 className={s[name]}>{title}</h2>
    </div>
  );
};

export default Title;
