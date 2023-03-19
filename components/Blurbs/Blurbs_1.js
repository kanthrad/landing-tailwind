import Image from "next/image";

const Blurbs = (props) => {
  const { items } = props;
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="mb-8 grid md:grid-cols-[100px_auto]">
          <Image
            alt=""
            width={100}
            height={100}
            src={item.image}
            className="mb-4"
          />
          <div className="md:ml-8">
            <p className="mb-4 font-serif text-2xl">{item.title}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Blurbs;
