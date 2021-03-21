import ShowCardList from "../components/ShowCardList";
import Title from "../components/Title";

export default function FavouritesPage({ favourites, setFavourites }) {
  return (
    <>
      <Title>Your Favourite Shows</Title>
      <ShowCardList setFavourites={setFavourites} favourites={favourites} list={favourites} />
    </>
  );
}
