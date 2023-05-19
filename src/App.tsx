import React, { useEffect, useState } from 'react'
import { Todo } from './assets/components/Todo';



//Asignarle a cada componente de arrays un determinado prefijo a su id
interface DataAll { //Objeto
  todos: { // en el todos se almacena un arreglo
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[]; //Con los corchetes indicamos que almacenamos un arreglo y es valido en TS
  total: number;
  skip: number;
  limit: number;
}

export const App: React.FC = () => {
  const [name, setName] = useState("Right now");
  const [thatOn, setThatOn] = useState(false)
  const [allList, setAllList] = useState<DataAll>() //Obteniendo un arreglo de dicho objeto y por eso son los corchetes


  useEffect(() => {
    const getAlls = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result = await data.json();
      console.log(result)
      setAllList(result)
    };
    getAlls(); // Ejecutando la función y dicha función nos esta retornando la información, desde la consola
  }, [])
  
  // Imprimir el listado del id con un mapeo del array y su API, el allList sin el signo de pregunta es undefined y el signo aplica que puede ser cualquier información
  return (
    <div>
      {allList?.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo.todo} status={todo.completed ? "Online" : "Offline"}/>
      })}
      
    </div>
  );
};

