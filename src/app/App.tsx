import { Providers } from "./providers";
import { Outlet, Link } from "react-router-dom";
import { MainPage } from "@/pages";

const App = () => {
  return (
    <MainPage>
      <Providers />
    </MainPage>
  );
};

export default App;
