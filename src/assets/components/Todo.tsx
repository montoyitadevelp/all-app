import React from 'react'
import { Form } from './Form';

type AllStatus = "Online" | "Offline" | "Starting" | "Finishing" //Al tener varios tipados es recomendable es utilizar el type

interface AllProps {
    todo: string;
    status?: AllStatus; //Esta propiedas es opcional y no obligatoria, ademas de crear nuestro propio tipado
}

export const Todo: React.FC<AllProps> = ({todo, status}) => {
    //Esta funcion recibe un evento, ademas de que podremos tener acceso a todas las propiedas con este evento
  const handleClick = (evt: React.MouseEvent) => {
    console.log(evt.type)
  }
  //Tailwind CSS tiene utilidades con el nombre de clases y son intuitivas
    return (
    <>  
        <li className='text-xl font-extrabold'>
          <i className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {todo}
          </i>
        </li>

        <h2 className='text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            {status}
        </h2>
        <button onClick={handleClick} className=" text-stone-50 bg-slate-400 text-lg font-serif hover:bg-neutral-950">Starting text</button>
        <Form />
        <hr />
        
    </>
  )
}
