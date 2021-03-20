import styled from "styled-components";
import { LazyLoadImage as Unstyled } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Wrapper = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.4);
  width: var(--card-size-m);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1.4rem .8rem rgba(255, 255, 255, 0.6);
  }
`;

const LazyLoadImage = styled(Unstyled)`
  width: var(--card-size-m);
  height: 30rem;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  object-position: top;
`;

const Content = styled.div`
  padding: .5rem 1.5rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: var(--font-size);
`;

export default function NowShowingCard(show) {
  return (
    <Wrapper>
      <LazyLoadImage alt={show.name} effect="blur" src={show.img} />
      <Content>
        <Title>{show.name}</Title>
      </Content>
    </Wrapper>
  );
}
