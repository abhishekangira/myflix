import ShowCard from "./ShowCard";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-size), 1fr));
  gap: 3rem;
  justify-items: center;
  margin-top: 3rem;
`;

export default function ShowCardList({ list, favourites, setFavourites }) {
  const showHash = {};
  return (
    <List>
      {list.map((obj) => {
        const show = "show" in obj ? obj.show : obj;
        showHash[show.id] = show.id in showHash ? false : true;
        return (
          showHash[show.id] && (
            <ShowCard
              key={show.id}
              id={show.id}
              show={show}
              img={show.image?.medium}
              name={show.name}
              language={show.language}
              rating={show.rating.average?.toFixed(1)}
              summary={show.summary}
              genres={show.genres.length ? show.genres : "Regular"}
              isFav={favourites.find((obj) => obj.id === show.id) ? "true" : "false"}
              setFavourites={setFavourites}
            />
          )
        );
      })}
    </List>
  );
}
