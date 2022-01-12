import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  race,
  cursor,
  adv,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "race",
      title: "Race",
    },
    {
      id: "cursor",
      title: "Cursor",
    },
    {
      id: "adventure",
      title: "Adventure",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "race":
        setData(race);
        break;
      case "cursor":
        setData(cursor);
        break;
      case "adventure":
        setData(adv);
        break;
      default:
        setData(race);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
