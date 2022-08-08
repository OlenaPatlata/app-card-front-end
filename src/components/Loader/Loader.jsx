import { RotatingSquare } from 'react-loader-spinner';
import s from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={s.spinner}>
      <RotatingSquare
        height="100%"
        width="100%"
        color="#6d7a8d"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
