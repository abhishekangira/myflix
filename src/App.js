import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const Page = styled.div`
  padding: 2rem;
  margin-top: 6rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Page>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/favourites">
            <h1>Favs</h1>
          </Route>
        </Switch>
      </Page>
    </Wrapper>
  );
}

export default App;
