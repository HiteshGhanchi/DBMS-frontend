import axios from "axios";

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
    const token = localStorage.getItem("token");

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
const token = localStorage.getItem("token");
    try{
        const reponse = axios.put(backend+url,data,{
            headers:{
                Authorization: `Bearer ${!flag ? "" : token}`
            }
        })
        return reponse
    }
    catch(err){
        return err;
    }
}

const deleteData = async (url,flag = false) => {
const token = localStorage.getItem("token");

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