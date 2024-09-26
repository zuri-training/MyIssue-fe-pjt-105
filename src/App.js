import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import RoutingComponent from "./containers/routingComponent";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const routeName = useLocation().pathname.split("/")[1];
  const isFormPage = routeName === "signup" || routeName === "signin";

  const onAuth = () => {
    setIsAuth(true);
  };

  return (
    <MantineProvider>
      <div className="App">
        <>{!isFormPage ? <Header isAuth={isAuth} /> : ""}</>
        <RoutingComponent setAuth={onAuth} isUserAuth={isAuth} />
      </div>
    </MantineProvider>
  );
}

export default App;
