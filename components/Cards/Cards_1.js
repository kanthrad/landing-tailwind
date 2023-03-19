import Image from "next/image";
import ButtonLink from "../ButtonLink/ButtonLink_1";

const Cards = (props) => {
  const { items } = props;
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <Image
            alt=""
            width={375}
            height={197}
            src={item.image}
            className="mb-8"
          />
          <p className="mb-4 font-serif text-2xl">{item.title}</p>
          <p className="mb-6">{item.text}</p>
          <p className="text-right">
            <ButtonLink colorTheme="third" text={item.link} />
          </p>
        </div>
      ))}
    </>
  );
};
export default Cards;
