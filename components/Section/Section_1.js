const Section = (props) => {
  const { children, id, className } = props;

  return (
    <section id={id} className={"py-16 px-10 " + className}>
      {children}
    </section>
  );
};
export default Section;
