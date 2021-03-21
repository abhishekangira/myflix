import { useEffect, useState } from "react";
import axios from "axios";

import ShowCardList from "../components/ShowCardList";
import Title from "../components/Title";
import getCountryName from "../utils/getCountryName";

export default function HomePage({ country, favourites, setFavourites }) {
  const [showCardList, setShowCardList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}`);
      setShowCardList(response.data);
      console.log(response.data);
    })();
  }, [country]);

  return (
    <>
      <Title>Now Showing in {getCountryName(country)}</Title>
      <ShowCardList setFavourites={setFavourites} favourites={favourites} list={showCardList} />
    </>
  );
}
