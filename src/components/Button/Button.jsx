import PropTypes from 'prop-types';
import s from './Button.module.scss';
import { IconContext } from 'react-icons';

const Button = ({
  type = 'button',
  onClick,
  disabled = true,
  name,
  text,
  icon = false,
  children,
  style,
}) => {
  return (
    <button
      type={type}
      disabled={!disabled}
      onClick={onClick}
      className={icon ? s.iconWrapper : s[name]}
      style={style}
    >
      {icon ? (
        <IconContext.Provider
          value={{
            className: `${s.icon}`,
            style: {
              width: '100%',
              height: '100%',
            },
          }}
        >
          {children}
        </IconContext.Provider>
      ) : (
        text
      )}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
