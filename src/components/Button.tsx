const Button = ({ handleClick, text }: any) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="px-10 py-2 text-slate-200 rounded-lg bg-red-800"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
