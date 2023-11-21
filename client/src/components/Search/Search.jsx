import style from "./Search.module.css";

function Search() {
  return (
    <div className={style.container}>
      <form>
        <input placeholder="Type doge here"></input>
        <button>Search</button>
      </form>
      <hr></hr>
      <button>Landing Page</button>
      <button>Create Dog</button>
    </div>
  );
}

export default Search;
