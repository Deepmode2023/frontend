import logoConfig from "./logo.svg";

const LogoDeepmode = () => {
  return (
    <div className="flex-col p-5  justify-center">
      <img
        src={logoConfig}
        alt="logo"
        className="w-[100px] h-[100px] sm:w-14 sm:h-14"
      />
      <div className="font-georgia font-bold">DEEPMODE</div>
    </div>
  );
};

export { LogoDeepmode };
