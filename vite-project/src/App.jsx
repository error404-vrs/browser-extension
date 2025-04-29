import { useState, useEffect } from "react";
import "./App.css";

import CardWrapper from './compenents/CardWrapper'
import Logo from './compenents/Logo'
import Title from './compenents/Name'
import Description from './compenents/Description'

function App() {
  const [extensionSources, setExtensionSources] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json");
      const data = await res.json();
      setExtensionSources(data);
    }
    getData();
  }, []);
  console.log(extensionSources);
  return (
    <main>
      {extensionSources.map((extension) => (
        <CardWrapper key={extension.id}>
          <div className="logo-part">
          <Logo imgSrc={extension.logo} />
          </div>
          <div className="right-part">
          <Title title={extension.name} />
          <Description description={extension.description} />
          </div>
        </CardWrapper>
      ))}
    </main>
  );
}
export default App;