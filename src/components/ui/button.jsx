import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, variant, className, ...props }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded-lg transition-all',
    {
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-600 text-white hover:bg-gray-700': variant === 'secondary',
      'border border-gray-500 text-gray-400 hover:border-white':
        variant === 'outline',
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  className: '',
};

export default Button;
