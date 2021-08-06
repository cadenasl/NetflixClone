import classes from "./MyList.module.css";
import ListContext from "../context/context";
import { useContext } from "react";

import Button from "../UI Elements/button";

const MyList = () => {
  const Ctx = useContext(ListContext);
  console.log(Ctx.userFavoriteMovies);
  let list = <div>Please add to your favorites</div>;
  console.log(Ctx.userFavoriteMovies);

  if (Ctx.userFavoriteMovies != null) {
    list = Ctx.userFavoriteMovies.map((movie) => {
      return (
        <div key={movie.image} className={classes.ListRowItem}>
          <div className={classes.Img}>
            <img
              className={classes.movieImg}
              src={movie.image}
              alt="Queens Gambit"
            />
          </div>

          <div className={classes.hide}>
            <Button
              onClick={() => {
                Ctx.removeFromList(movie.image);
              }}
              text="Remove"
            />
          </div>
        </div>
      );
    });
  }

  return (
    <div className={classes.listPage}>
      <h1 className={classes.listHeader}>Your List</h1>
      <div className={classes.ListRow}>{list}</div>
    </div>
  );
};

export default MyList;
