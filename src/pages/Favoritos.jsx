import { useContext, useEffect } from "react";
import { LikeContext } from "../context/LikeContext";

export default function Favoritos() {
  const { filled, setFilled } = useContext(LikeContext);
  const { pic, setPic } = useContext(LikeContext);

  const obtieneData = async () => {
    const response = await fetch("../public/fotos.json");
    const datos = await response.json();
    console.log(datos.photos[0].id);
    console.log(datos.photos[0].src["tiny"]);
    setPic(datos.photos);
  };

  const handleClick = (id) => {
    setFilled((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  useEffect(() => {
    obtieneData();
  }, []);

  console.log(filled);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {pic
          .filter((item) => filled[item.id] === true)
          .map((item) => (
            <article key={item.id}>
              <img src={item.src["tiny"]} />
              <li>{item.photographer}</li>
            </article>
          ))}
      </div>
    </div>
  );
}
