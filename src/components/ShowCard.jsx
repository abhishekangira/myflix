import styled from "styled-components";
import { LazyLoadImage as Unstyled } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Wrapper = styled.div`
  border-radius: 0 15px 15px 0;
  box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.3), inset 0px 0 50px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.4);
  position: relative;
  width: var(--card-size-m);
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  transition: 1s;
  &:hover {
    z-index: 1111;
    transform: perspective(2000px) rotate(-2deg);
    div:nth-child(2) {
      transform: rotateY(-135deg);
      border-radius: 15px;
      box-shadow: 0 0.4rem 1.6rem 0.3rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const ImgContainer = styled.div`
  transition: 1s;
  transform-origin: left;
    height: 32rem;
  `;

const LazyLoadImage = styled(Unstyled)`
  width: var(--card-size-m);
  border-radius: 0 15px 15px 0;
  height: 32rem;
  z-index: 1;
`;

const Content = styled.div`
  padding: 1.5rem 1.5rem;
  position: absolute;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: var(--font-size);
`;

export default function ShowCard(show) {
  return (
    <Wrapper>
      <Content>
        <Title>{show.name}</Title>
      </Content>
      <ImgContainer>
        <LazyLoadImage alt={show.name} effect="blur" src={show.img} />
      </ImgContainer>
    </Wrapper>
  );
}
