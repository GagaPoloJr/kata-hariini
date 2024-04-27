const Loader = ({ loading }: any) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
