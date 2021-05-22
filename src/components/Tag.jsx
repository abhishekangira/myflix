import styled, { css } from "styled-components";

const Span = styled.span`
  background-color: #eee;
  ${({ dark }) =>
    dark === "true" &&
    css`
      color: #eee;
      background-color: var(--color-text);
    `}
  margin-top: 0.5rem;
  font-size: var(--font-size-s);
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  font-weight: 500;
  display: inline-block;
`;

export default function Tag({ text = "Default", dark }) {
  return <Span dark={dark}>{text}</Span>;
}
