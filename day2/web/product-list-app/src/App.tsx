import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductList } from "./Product";

function App() {
  return (
    <>
      <Card>
        <CardHeader>
          <Header></Header>
        </CardHeader>
        <CardBody>
          <ProductList></ProductList>
        </CardBody>
        <CardFooter>
          <Footer></Footer>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
