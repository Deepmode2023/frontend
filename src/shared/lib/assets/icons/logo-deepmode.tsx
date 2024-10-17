import logoConfig from "./logo2.webp";

const LogoDeepmode = () => {
  return (
    <div className="flex-col justify-center relative overflow-hidden filter drop-shadow-2xl drop-shadow-skye-200">
      <img
        src={logoConfig}
        alt="logo"
        className="w-[300px] h-[300px] overflow-hidden z-40 relative"
      />
      <div className="dark:bg-dark-color1 bg-dark-color2 w-[150px] h-[150px] rounded-full absolute top-[10px] opacity-35" />
      <div className="dark:bg-dark-color3 bg-light-color1 w-[500px] h-[100px] rounded-full absolute top-[50px] left-[25px] opacity-85" />
    </div>
  );
};

export { LogoDeepmode };
