import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { guardarLocal, obtenerLocal } from '../service/localStorage';

const Contador =()=>{
    let {time,setTime, dataLocal, user, userExist, setUserExist} = useContext(CartContext)

    const contador =()=>{
        setTime(prev => prev - 1)
    }

    if(time === 0){
        setTime(60)
    } 

    useEffect(()=>{
        setInterval(contador, 1000)
    },[])
    
    const guardar=()=>{
        dataLocal = obtenerLocal();
        dataLocal = [...dataLocal, {name:user, timers: time, button: true} ] 
        console.log(dataLocal)
        guardarLocal(dataLocal);
        setUserExist([{name:user, timers: time, button: true}])
        setTime(60)
    }
   
    
    return(
        <>
            <p className='contador'>{time}</p>
            {
            userExist.length > 0
            ?
            <div>
                <p>El numero seleccionado es: {userExist[0].timers}</p>
            </div>
            :
            <button className='button-jugar' onClick={guardar}>Elija su numero</button>
            }
        </>
    )
}

export default Contador;