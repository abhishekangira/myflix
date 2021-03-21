import styled, { css } from "styled-components";

const Btn = styled.button`
  background-color: rgba(1, 1, 1, 0.3);
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem 0;
  color: #eee;
  outline: none;
  ${(props) =>
    props.isRed === "true" &&
    css`
      background-color: rgba(221, 67, 67, 0.767);
    `}
`;

export default function Button({ isRed, children, ...props }) {
  return (
    <Btn {...props} isRed={isRed}>
      {children}
    </Btn>
  );
}
