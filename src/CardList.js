import React from "react";
import Card from "./Card";

const CardList = ({ taomlar }) => {
  return (
    <div className="tc">
      {taomlar.map((item, index) => {
        return (
          <Card
            key={index}
            img={taomlar[index].image}
            name={taomlar[index].name}
            country={taomlar[index].country}
          />
        );
      })}
    </div>
  );
};

export default CardList;
