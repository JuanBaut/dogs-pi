import { useNavigate } from "react-router-dom";
import style from "./Create.module.css";

function Create() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.container}>
        <div className={style.bar}>
          <h4>Create dog here</h4>
          <button onClick={() => navigate(`/home`)}>Home page</button>
        </div>
        <form className={style.form}>
          <input className={style.input} placeholder="Name"></input>
          <input className={style.input} placeholder="Breed"></input>
          <input className={style.input} placeholder="Color"></input>
          <button className={style.input}>Create your dog!</button>
        </form>
      </div>
    </>
  );
}

export default Create;
