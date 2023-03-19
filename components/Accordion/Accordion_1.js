import { useState } from "react";

const Accordion = (props) => {
  const { items } = props;
  const [open, setOpen] = useState("");
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-10 rounded-2xl p-6 shadow-2xl shadow-gray-600/10"
        >
          <p
            className="mb-2 flex cursor-pointer justify-between font-serif text-xl font-medium"
            onClick={() => setOpen(index)}
          >
            {item.title}
            <span className="rounded-full font-bold text-cyan-600">
              {open == index ? "-" : "+"}
            </span>
          </p>
          <p className={open == index ? "" : "hidden"}>{item.text}</p>
        </div>
      ))}
    </>
  );
};
export default Accordion;
