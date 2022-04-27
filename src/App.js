import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState();

  useEffect(() => {
    const url = "http://api.sr.se/api/v2/podfiles?programid=5067&format=json";

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
            (<p key={i}>{podfile.title}</p>),
            (<p key={i}>{podfile.description}</p>),
            (<p key={i}>{podfile.url}</p>)
          );
        })}
      <a href="http://sverigesradio.se/topsy/ljudfil/srapi/7365817.mp3">
        Ladda ner avsnittet
      </a>
    </div>
  );
}

export default App;
