import styled from "styled-components";

const Wrapper = styled.div`
  width: 2.5em;
  height: 5em;
  position: fixed;
  left: 1em;
  z-index: 100;
  border-top-right-radius: 0.2em;
  border-top-left-radius: 0.2em;
  margin: auto;
  font-family: "Kite One", sans-serif;
  background: linear-gradient(to bottom, #bf953f, #fcf6ba, #fbf5b7, #aa771c);

  i {
    width: 90%;
    height: 120%;
    display: block;
    margin: auto;
    z-index: 100;
    position: relative;
    border-right: dashed 0.0625em #bdbdbd;
    border-left: dashed 0.0625em #bdbdbd;
    overflow: hidden;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -2.4em;
    left: 0;
    width: 0;
    height: 0;
    border-top: 2.5em solid #aa771c;
    border-right: 2.5em solid transparent;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -2.4em;
    right: 0;
    width: 0;
    height: 0;
    border-top: 2.5em solid #aa771c;
    border-left: 2.5em solid transparent;
  }
`;

export default function Ribbon() {
  return (
    <Wrapper>
      <i></i>
    </Wrapper>
  );
}
