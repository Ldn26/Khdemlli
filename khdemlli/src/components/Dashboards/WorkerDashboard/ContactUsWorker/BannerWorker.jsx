import hogo from "../../../../assets/aboutusicons/Image.png";
function BannerWoker({ content, className = "" }) {
  const defaultClasses = " relative  justify-center   w-[700px] ";
  const classNames = `${defaultClasses} ${className}`.trim();
  return (
    <div className="flex justify-center items-center">
      <div className={classNames}>
        <section className="w-[700px]">
          <img className="mt-5 " src={hogo} alt="logo" />
        </section>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-2xl text-white font-bold  font-mainfont ">
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BannerWoker;
