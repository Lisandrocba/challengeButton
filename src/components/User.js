import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { guardarLocal, obtenerLocal } from "../service/localStorage";

const User =()=>{
    const navigate = useNavigate();
    let {setUser, userExist, setUserExist, dataLocal} = useContext(CartContext);
    const [messege, setMessege] = useState('');

    useEffect(() => {
        guardarLocal(dataLocal);
    }, [])
    
    
    const handleChange =(e)=>{
        e.preventDefault();
        if(e.target.user.value.length === 0 || e.target.user.value.trim().length === 0){
            setMessege('Debes ingresar un nombre de usuario');
            return messege;
        }else{
            let us;
            let dataLocal = obtenerLocal();
            us = dataLocal.filter(item=> item.name === e.target.user.value)
            console.log(us)
            if(us.length > 0){
                setUserExist(us)
                console.log(userExist)
                console.log('entro')
                navigate('/juego');
            }else{
                console.log('es por aca')
                setUser(e.target.user.value);
                navigate('/juego');
            }
            
        }
    }

   

    return(
        <div className='contenedorForm'>
            <form onSubmit={handleChange} className='form' >
                <label className="tituloForm">Nombre de Usuario:</label>
                <input className='input' type="text" name="user"/>
                <input className='buttonForm' type="submit" value="Jugar"/>
                <p>{messege}</p>
            </form>
        </div>
    )
}

export default User;