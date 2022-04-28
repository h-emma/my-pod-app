import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card.js";
import { H1 } from "./components/Text/Text";

function App() {
  const [result, setResult] = useState();
  const [podfiles, setPodfiles] = useState();

  useEffect(() => {
    const url = "https://api.sr.se/api/v2/podfiles?programid=5067&format=json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);

        const fliterPodfile = [];

        for (let i = 0; i < data.podfiles.length; i++) {
          if (i === 0) {
            fliterPodfile.push(data.podfiles[0]);
            continue;
          }
          if (data.podfiles[i].title === data.podfiles[i - 1].title) {
            continue;
          }
          fliterPodfile.push(data.podfiles[i]);
        }
        setPodfiles(fliterPodfile);
      });
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <H1>Här hittar du avsnitt av p3 Historia</H1>
      </div>
      {result &&
        podfiles.map((podfile, i) => {
          return (
            <Card
              key={i}
              url={podfile.url}
              title={podfile.title}
              description={podfile.description}
            />
          );
        })}
    </div>
  );
}

export default App;
