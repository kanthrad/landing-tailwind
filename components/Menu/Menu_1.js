import { useState } from "react";

const Menu = (props) => {
  const { items } = props;
  const [open, setOpen] = useState(false);
  return (
    <nav className="grid">
      <button
        type="button"
        aria-expanded="false"
        aria-controls="menu"
        aria-label="Open menu"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
        className="justify-self-end px-4 md:hidden"
      >
        <svg
          aria-hidden="true"
          width="32"
          height="32"
          className="stroke-cyan-600"
        >
          <use
            href="images/sprite.svg#menu"
            className={open ? "hidden" : ""}
          ></use>
          <use
            href="images/sprite.svg#cross"
            className={open ? "" : "hidden"}
          ></use>
        </svg>
      </button>
      <ul
        id="menu"
        className={
          "justify-end gap-4 px-4 font-serif text-xl md:flex " +
          (open
            ? "absolute left-0 right-0 top-[68px] bg-white shadow-2xl shadow-cyan-600/10"
            : "hidden")
        }
      >
        {items.map((item, index) => (
          <li key={index} className="p-4">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
