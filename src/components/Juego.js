import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import { get } from "../service/apiService";
import { guardarLocal, obtenerLocal } from "../service/localStorage";
import Contador from './Contador';
import Promedio from "./Promedios";
import "./style.css";

const Juego =()=>{
    let {user, userExist, dataLocal, time, setTime} = useContext(CartContext);
    const [userApi, setUserApi] = useState([])
    useEffect(()=>{ 
        setTimeout(()=>{
            dataLocal = obtenerLocal();
            dataLocal = [...dataLocal, {name: 'Lisandro', timers: time, button: true} ] 
            console.log(dataLocal)
            guardarLocal(dataLocal);
            setTime(60)
        }, 10000)
        async function GetOrganization () {
            let value = await get('https://jsonplaceholder.typicode.com/users')
            return setUserApi([value.data])
        }
        GetOrganization()
        
    },[]) 

    return (
        <div className='contenedor'>
            <div className='contenedor-juego'>
                <div className='juego'>
                    {
                        userExist.length > 0
                        ?
                        <div>
                            <h1 className="titulo">Hola {userExist[0].name}</h1>
                            <p className='subtitulo'>Este usuario ya se encuentra registrado en el juego</p>
                        </div>
                        :
                        <h1 className="titulo">Hola {user}</h1>
                    }
                    <Contador />
                </div>
                <div className="contenedor-promedio">
                    <Promedio />
                </div>
            </div>
            <div className='contenedor-users'>
                {
                    userApi.length === 0
                    ?
                    <p>No hay elementos</p>
                    :
                    <div>
                        <p className="subtitulo">Usuarios Conectados</p>
                        {userApi[0].map(item=> 
                            {
                                return(
                                <div className="contenedorUsers">
                                    <img src={require('../multimedia/circulo-negro.png')} alt='img' width='5' height='5'/>
                                    <p className='nameUsers'>{item.name}</p>
                                </div>
                                )
                            })}
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Juego;