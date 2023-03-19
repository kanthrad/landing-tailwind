import Link from "next/link";

const ButtonLink = (props) => {
  const { colorTheme, text } = props;

  let classes = "inline-block rounded-3xl px-8 py-4 font-bold uppercase ";

  switch (colorTheme) {
    case "main":
      classes =
        classes +
        "text-white bg-[#ff4d54] hover:bg-[#ff666b] shadow-lg shadow-gray-600/10";
      break;
    case "second":
      classes =
        classes +
        "text-white bg-[#3cb3b3] hover:bg-[#40bfbf] shadow-lg shadow-gray-600/10";
      break;
    case "third":
      classes =
        classes +
        "text-[#3cbebe] bg-[#ebf9f9] hover:bg-[#d8f3f3] " +
        (props.size ? props.size : "text-sm");
      break;
  }

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {text}
      </Link>
    );
  } else {
    return (
      <button type="button" className={classes}>
        {text}
      </button>
    );
  }
};
export default ButtonLink;
