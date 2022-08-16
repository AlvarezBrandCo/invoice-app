import classnames from 'classnames';

const Button = ({className, children, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(className, "btn-main")}>
      {children}
    </button>
  )
}

export default Button;
