import { useNavigate } from "react-router-dom";
import style from "./Search.module.css";

function Search() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <form>
        <input placeholder="Type doge here"></input>
        <button>Search</button>
      </form>
      <button onClick={() => navigate(`/`)}>Landing page</button>
      <button onClick={() => navigate(`/create`)}>Create dog</button>
    </div>
  );
}

export default Search;
