export const guardarLocal =(data)=>{
    localStorage.setItem("data",JSON.stringify(data))
}

export const obtenerLocal =()=>{
    let res = JSON.parse(localStorage.getItem("data"))
    return res
}