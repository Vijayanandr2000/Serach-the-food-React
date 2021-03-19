import React, { useState } from "react";
import "./Home.css";
import Data from "./Data.jsx";

function Home() {
  const [place, setPlace] = useState("");
  const [res, setRes] = useState("");
  //   url, thumb, name, cusinies, currency, two
  //   const [url, setUrl] = useState("");
  const get = (e) => {
    e.preventDefault();
    console.log(place, res);
    var url =
      "https://developers.zomato.com/api/v2.1/search?entity_id=" +
      res +
      "&entity_type=city&q=" +
      place +
      "&count=100";
    getData(url);
    setPlace("");
    setRes("");
  };
  const getData = (url) => {
    fetch(url, {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "user-key": "db45fba890e679c2be633014354c84aa",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var res = data.restaurants;
        res.map((element) => {
          console.log(
            element.restaurant.url
            // element.restaurant.thumb,
            // element.restaurant.name,
            // element.restaurant.cuisines,
            // element.restaurant.currency,
            // element.restaurant.average_cost_for_two
          );
          return <Data url={element.restaurant.url} />;
        });
      });
  };
  return (
    <div className="app">
      <div className="bg">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        />
      </div>
      <div className="search">
        <select
          name=""
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        >
          <option value="place">Select Place</option>
          <option value="Chennai">Chennai</option>
          <option value="Goa">Goa</option>
          <option value="Delhi">Delhi</option>
          <option value="Trichy">Trichy</option>
        </select>

        <div className="find">
          <input
            type="text"
            placeholder="Search by restaurant name"
            onChange={(e) => setRes(e.target.value)}
            value={res}
          />
          <button onClick={get}>find</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

//   console.log(
//     element.restaurant.url,
//     element.restaurant.thumb,
//     element.restaurant.name,
//     element.restaurant.cuisines,
//     element.restaurant.currency,
//     element.restaurant.average_cost_for_two
//   );

{
  /* <Data
url={element.restaurant.url}
thumb={element.restaurant.thumb}
name={element.restaurant.name}
cusinies={element.restaurant.cuisines}
currency={element.restaurant.currency}
two={element.restaurant.average_cost_for_two} */
}
