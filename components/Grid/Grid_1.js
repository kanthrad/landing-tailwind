const Grid = (props) => {
  const { children, className } = props;
  const classes = "grid gap-4 px-2 md:px-12 py-12 " + className;
  return <div className={classes}>{children}</div>;
};
export default Grid;
