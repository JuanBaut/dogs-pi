import style from "./Landing.module.css";

import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.block}>
        <h3>App de perritos</h3>
        <hr></hr>
        <h5>Hecho por Juan Bautista</h5>
      </div>
      <button className={style.button} onClick={() => navigate(`/home`)}>
        Ver perritos
      </button>
    </div>
  );
}

export default Landing;
