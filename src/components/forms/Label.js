import classNames from 'classnames';

function Label({ children, className, ...props }) {
  const classes = classNames(
    'block text-sm font-medium text-white',
    className
  );

  return (
    <label {...props} className={classes}>
      {children}
    </label>
  );
}

export default Label;
