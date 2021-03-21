import ShowCard from "./ShowCard";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-size-m), 1fr));
  gap: 3rem;
  justify-items: center;
  margin-top: 3rem;
`;

export default function NowShowing({ list }) {
  const showHash = {}
  return (
    <div>
      <Title>Now Showing in USA</Title>
      <List>
        {list.map(({ show }) => {
          showHash[show.id] = showHash[show.id] === true ? false : true;
          return (
            showHash[show.id] && (
              <ShowCard
                key={show.id}
                img={show.image?.medium}
                name={show.name}
                laguage={show.language}
                rating={show.rating.average}
                summary={show.summary}
                genres={show.genres}
              />
            )
          );
        })}
      </List>
    </div>
  );
}
