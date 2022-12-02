import { useState  } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['Pokemon', 'Dragon ball'])

  const onAddCategory = (newCategory) => {
    if(categorias.includes(newCategory)) return;
    setCategorias([...categorias, newCategory])
  } 

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        { 
          categorias.map( (c,i) => {
            return (
              <GifGrid
              key={i}
              category={c}
              />
            )
          })
        }
      </ol>

      {/* Gif Item */}
    </>
  );
};
