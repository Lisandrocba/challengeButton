import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [user, setUser] = useState([]);
    let [time, setTime] = useState(60);
    let [userApi, setUserApi] = useState([]);
    let [userExist, setUserExist] = useState({});
    const data = { name : '', timers: [], button: false };
    let dataLocal = [
        {name: 'Pia Gauna', timers: 53, button: true},
        {name: 'Ramiro Acosta', timers: 54, button: true},
        {name: 'Belen Fuentes', timers: 45, button: true},
        {name: 'Franco Rodriguez', timers: 36, button: true},
        {name: 'Enzo Ramirez', timers: 38, button: true},
        {name: 'Roman Gallego', timers: 34, button: true},
        {name: 'Romina Alvarez', timers: 15, button: true},
        {name: 'Julian Sanchez', timers: 17, button: true},
        {name: 'Ignacio Perez', timers: 20, button: true},
        {name: 'Lisandro Cordoba', timers: 5, button: true},
        {name: 'Juan Palavecino', timers: 3, button: true},
        {name: 'Macarena Gordillo', timers: 7, button: true},
        {name: 'Lourdes Sanchez', timers: 10, button: true},
        {name: 'Florencia Gonzales', timers: 7, button: true},
        {name: 'Ramiro Hoya', timers: 59, button: true},
        {name: 'Franco Ochoa', timers: 23, button: true},
        {name: 'Silvia Maimone', timers: 2, button: true},
        {name: 'Adrian Loredo', timers: 37, button: true},

    ];
    
    return <CartContext.Provider value={{user, setUser, time, setTime, data, dataLocal, userApi, setUserApi, userExist, setUserExist}}>{children}</CartContext.Provider>
}

export {CartProvider};
export default CartContext;
