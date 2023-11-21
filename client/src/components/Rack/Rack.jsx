import style from "./Rack.module.css";

import Card from "../Card/Card";
import { useState, useEffect } from "react";

function Rack() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10; // Items visible per page

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(
        `/items?page=${page}&per_page=${itemsPerPage}`,
      );
      setItems(await response.json());
    }

    fetchItems();
  }, [page]);

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    // Fetch next page if not last page
    if (items.length === itemsPerPage) {
      setPage(page + 1);
    }
  }
  return (
    <div className={style.container}>
      <button onClick={previousPage}>Previous</button>
      <div className={style.counter}>
        <h5>1</h5>
      </div>
      <button onClick={nextPage}>Next</button>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Rack;
