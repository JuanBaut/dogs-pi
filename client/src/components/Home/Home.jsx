import style from "./Home.module.css";

import Search from "../Search/Search";
import Rack from "../Rack/Rack";

function Home() {
  return (
    <div className={style.container}>
      <Search />
      <Rack />
    </div>
  );
}

export default Home;
