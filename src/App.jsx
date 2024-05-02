import React, { useState, useEffect } from "react";
import axios from "axios";

function AvatarList() {
  const [avatarData, setAvatarData] = useState([]);

  useEffect(() => {
    async function fetchAvatarData() {
      try {
        const response = await axios.get(
          "https://fetchavatar-xhceranm2a-uc.a.run.app"
        );
        setAvatarData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching avatar data:", error);
      }
    }

    fetchAvatarData();
  }, []);

  return (
    <div className="contrainer">
      {avatarData.map((avatar) => (
        <div className="box" key={avatar.id}>
          <h2>{avatar.name}</h2>
          <ul>
            {avatar.evolution.map((evo) => (
              <div className="card">
                <li key={evo.id}>
                  {evo.name} - Level {evo.level}
                </li>
                Price - {evo.price}$
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AvatarList;
