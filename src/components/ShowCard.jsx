import { useState } from "react";

import styled from "styled-components";
import { LazyLoadImage as UnstyledLazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Ribbon from "./Ribbon";
import Tag from "./Tag";
import Button from "./Button";

const Wrapper = styled.div`
  border-radius: 0 15px 15px 0;
  box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.3), inset 0px 0 50px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.4);
  position: relative;
  width: var(--card-size-m);
  transform-style: preserve-3d;
  transform: perspective(2000px);
  transition: 1s;
  &:hover {
    z-index: 3;
    transform: perspective(2000px);
    div:nth-child(2) {
      transform: rotateY(-135deg);
      border-radius: 0 15px 15px 0;
      box-shadow: 0 0.4rem 1.6rem 0.3rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  width: var(--card-size-m);
`;

const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: calc(var(--font-size) + 0.5rem);
  max-width: 80%;
`;

const Rating = styled.span`
  color: var(--color-text);
  box-shadow: inset 0.2rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  height: 2rem;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: calc(var(--font-size) - 0.5rem);
`;

const Tags = styled.span`
  span:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Summary = styled.div`
  font-size: calc(var(--font-size) - 0.3rem);
  line-height: 1.5rem;
  height: 16rem;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const ImgContainer = styled.div`
  transition: 1s;
  transform-origin: left;
  height: 32rem;
`;

const LazyLoadImage = styled(UnstyledLazyLoadImage)`
  width: var(--card-size-m);
  border-radius: 0 15px 15px 0;
  height: 32rem;
  z-index: 2;
`;

export default function ShowCard(show) {
  const [isFav, setIsFav] = useState(show.isFav);
  const [btnText, setBtnText] = useState(
    show.isFav === 'true' ? "REMOVE FROM FAVOURITES" : "ADD TO FAVOURITES"
  );
  return (
    <Wrapper>
      <Content>
        <TitleRating>
          <Title>{show.name}</Title>
          <Rating>{show.rating || "NA"}</Rating>
        </TitleRating>
        <Tags>
          <Tag text={show.language} />
          {Array.isArray(show.genres) ? (
            show.genres.map((genre) => <Tag text={genre} dark="true" />)
          ) : (
            <Tag text={show.genres} dark="true" />
          )}
        </Tags>
        <Summary dangerouslySetInnerHTML={{ __html: show.summary }} />
        <Button
          onClick={() => {
            if (isFav === "false") {
              setBtnText("REMOVE FROM FAVOURITES");
              setIsFav("true");
            } else {
              setBtnText("ADD TO FAVOURITES");
              setIsFav("false");
            }
          }}
          isRed={isFav}
        >
          {btnText}
        </Button>
      </Content>
      <ImgContainer>
        {isFav === "true" && <Ribbon />}
        <LazyLoadImage alt={show.name} effect="blur" src={show.img} />
      </ImgContainer>
    </Wrapper>
  );
}
