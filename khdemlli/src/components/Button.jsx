function Button({ content,className= "" }) {
  const defaultClasses = "py-2 px-7 rounded-full text-sm   font-medium  hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105";
  const classNames = `${defaultClasses} ${className}`.trim()
  return (
    <button className={classNames}>
      {content}
    </button>

  );
}

export default Button;
