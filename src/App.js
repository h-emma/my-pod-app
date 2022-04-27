import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState();

  useEffect(() => {
    const url = "https://api.sr.se/api/v2/podfiles?programid=5067&format=json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Här hittar du de senaste avsnitten av p3 Historia</h1>
      {result &&
        result.podfiles.map((podfile, i) => {
          return (
            <div key={i}>
              <p>{podfile.title}</p>
              <p>{podfile.description}</p>
              <a href={podfile.url}>Ladda ner avsnittet</a>
            </div>
          );
        })}
    </div>
  );
}

export default App;
