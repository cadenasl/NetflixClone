import { createContext } from "react";

const ListContext = createContext({
  userFavoriteMovies: [],
  addToList: () => {},
  removeFromList: () => {},
});

export default ListContext;
