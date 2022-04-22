import axios from 'axios';

const get = async(url)=>{
    const res ={};

    try{
        const axiosRes = await axios.get(url);
        res.data = axiosRes.data;
    }catch(e){
        res.error = e;
    }finally{
        return res;
    }
}

export {get};