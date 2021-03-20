import NowShowingCard from "./NowShowingCard";
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
        {list.map(({ show, season, summary }, index, arr) => {
          showHash[show.id] = showHash[show.id] === true ? false : true;
          return (
            showHash[show.id] && (
              <NowShowingCard
                key={arr[index].id}
                img={show.image.medium}
                name={show.name}
                laguage={show.language}
                rating={show.rating.average}
                summary={summary}
                type={show.type}
                season={season}
              />
            )
          );
        })}
      </List>
    </div>
  );
}
