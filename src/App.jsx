import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch(
          "https://fetchavatar-xhceranm2a-uc.a.run.app",
          {
            mode: "cors",
          }
        );
        const data = await response.json();
        if (data) {
          setAvatars(data);
        } else {
          throw new Error("Data is empty");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div className="box">
      {avatars.map((item) => (
        <div className="container">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
