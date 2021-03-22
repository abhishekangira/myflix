import styled from "styled-components";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

const Page = styled.div`
  padding: 2rem;
  margin-top: 6rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

function App() {
  const [country, setCountry] = useState("US");
  const [favourites, setFavourites] = useState([]);
  return (
    <Wrapper>
      <Navbar country={country} setCountry={setCountry} />
      <Page>
        <Switch>
          <Route exact path="/">
            <HomePage favourites={favourites} setFavourites={setFavourites} country={country} />
          </Route>
          <Route path="/favourites">
            <FavouritesPage favourites={favourites} setFavourites={setFavourites} />
          </Route>
        </Switch>
      </Page>
    </Wrapper>
  );
}

export default App;
