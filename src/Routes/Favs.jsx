import React from "react";
import Card from "../Components/Card";
import { getFav } from "../Components/utils/localStorage.service";

const Favs = () => {
  const localFavs = getFav()

  return (
    <>
      <h1>Favorite Doctor</h1>
      <div className="card-grid container">
        {localFavs.length
          ? localFavs.map((medicoFav) => <Card {...medicoFav} key={medicoFav.id} />)
          : null}
      </div>
    </>
  );
};

export default Favs;
