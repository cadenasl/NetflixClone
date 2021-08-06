import React, { useContext, useState, Suspense, lazy } from "react";
import Layout from "./components/layout/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListContext from "./components/context/context";
import "./App.css";
const HomePage = lazy(() => import("./components/Pages/homePage"));

const MyList = lazy(() => import("./components/Pages/myList.js"));

function App() {
  const [favoriteList, setFavoriteList] = useState([]);
  const Ctx = useContext(ListContext);
  console.log(Ctx);

  const addList = (item) => {
    console.log(item);

    const movieExists = favoriteList.some((movie) => movie.image == item.image);
    console.log(movieExists);
    if (movieExists) {
      return;
    }

    setFavoriteList((prevState) => [...prevState, item]);
    // console.log(favoriteList.includes(item));
  };

  const deleteList = (movie) => {
    const updatedMovieList = favoriteList.filter((item) => {
      return item.image != movie;
    });
    setFavoriteList(updatedMovieList);
    console.log(updatedMovieList);
  };
  return (
    <div className="app">
      <ListContext.Provider
        value={{
          userFavoriteMovies: favoriteList,
          addToList: addList,
          removeFromList: deleteList,
        }}
      >
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/list" component={MyList} />
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ListContext.Provider>
    </div>
  );
}

export default App;
