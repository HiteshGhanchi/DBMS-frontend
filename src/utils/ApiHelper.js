import axios from "axios";

const token = localStorage.getItem("token");
const backend = "http://localhost:5000/api/v1/";
const getData = async (url) => {
    try{
        const response = await axios.get(backend + url);
        return response;
    }catch(error){
        return error;
    }
}

const postData = async (url,data,flag = false) => {
    try{
        // console.log(token);
        const response = await axios.post(backend+url,data,{
            headers: {
                Authorization: `Bearer ${flag ? token: ""}`
            }
        });
        return response
    }catch(error){
        return error;
    }
}

const putData = async (url,data,flag = false) => {
    try{
        const reponse = axios.put(backend+url,data,{
            headers:{
                Authorization: `Bearer ${flag ? "" : token}`
            }
        })
        return reponse
    }
    catch(err){
        return err;
    }
}

const deleteData = async (url,flag = false) => {
    try{
        const response = await axios.delete(backend+url,{
            headers: {
                Authorization: `Bearer ${flag ? "" : token}`
            }
        });
        return response
    }catch(error){
        return error;
    }
}

export {getData,postData,putData,deleteData};