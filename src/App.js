import { Fragment } from "react";
import "./App.scss";
import Header from "./layouts/header/Header";
import Home1 from "./pages/home1/Home1";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />


      <Home1 />


      <Footer />

    </Fragment>
  );
}

export default App;
