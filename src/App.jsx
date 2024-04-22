import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [avatars, setavatars] = useState([]);
  const fetchData = async () => {
    const rs = await axios.get("http://localhost:3000/api/data");
    setavatars(rs.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(avatars);
  return (
    <div>
      {avatars.map((item) => (
        <div className="contriner">{item.name}</div>
      ))}
    </div>
  );
}

export default App;
