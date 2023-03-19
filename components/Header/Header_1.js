const Header = (props) => {
  const { children } = props;

  return (
    <header className="grid grid-cols-[200px_auto] bg-[#daeefd]">
      {children}
    </header>
  );
};
export default Header;
