import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 600;
  font-size: 3rem;
`;

export default function Title({ children }) {
  return <H1 title="Card Title">{children}</H1>;
}
