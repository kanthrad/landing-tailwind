const SectionHeader = (props) => {
  const { title, className } = props;
  const classes = "mb-6 font-serif text-5xl " + className;

  return <p className={classes}>{title}</p>;
};
export default SectionHeader;
