import React from 'react';
import { obtenerLocal } from '../service/localStorage';
import './style.css';

const Promedio =()=>{

    let dataLocal = obtenerLocal();
    let contadorPurple = 0;
    let contadorBlue = 0;
    let contadorGreen = 0;
    let contadorYellow = 0;
    let contadorOrange = 0;
    let contadorRed = 0;

    dataLocal.map(item =>{ 
        if(item.timers >= 52) {
            contadorPurple ++;
            return contadorPurple;
        }
        else if(item.timers >= 42) {
            contadorBlue ++;
            return contadorBlue;
        }
        else if(item.timers >= 32) {
            contadorGreen ++;
            return contadorGreen;
        }
        else if(item.timers >= 22) {
            contadorYellow ++;
            return contadorYellow;
        }
        else if(item.timers >= 12) {
            contadorOrange ++;
            return contadorOrange;
        }
        else if(item.timers >= 0) {
            contadorRed ++;
            return contadorRed;
        }
    })


    return (
        <div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#E753E7', width: `${contadorPurple*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div>   
                <p className='porcentaje'>{(contadorPurple*100/dataLocal.length).toFixed(2)}%</p>
            </div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#4E29F3', width: `${contadorBlue*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div> 
                <p className='porcentaje'>{(contadorBlue*100/dataLocal.length).toFixed(2)}%</p>
            </div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#29F230', width: `${contadorGreen*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div>
                <p className='porcentaje'>{(contadorGreen*100/dataLocal.length).toFixed(2)}%</p>
            </div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#FFF53E', width: `${contadorYellow*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div>
                <p className='porcentaje'>{(contadorYellow*100/dataLocal.length).toFixed(2)}%</p>
            </div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#FFAD55', width: `${contadorOrange*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div>
                <p className='porcentaje'>{(contadorOrange*100/dataLocal.length).toFixed(2)}%</p>
            </div>
            <div className='contenedorBarra'>
                <div className='barra'>
                    <div style={{backgroundColor: '#FF5454', width: `${contadorRed*100/dataLocal.length}%`, borderRadius: '5px 0 0 5px'}}></div>
                    <div className='colorGris'></div>
                </div>
                <p className='porcentaje'>{(contadorRed*100/dataLocal.length).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default Promedio;