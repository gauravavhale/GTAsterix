import axios from "axios";   
 
    export const api = axios.create({
        baseURL : "https://fakestoreapi.com"
    })

    api.interceptors.request.use( 
        (config) => {
                const token = localStorage.getItem("token")
                if(!token){
                return Promise.reject("No token found. User not authenticated.");
                }
                config.headers.Authorization = `Bearer ${token}`;
            return config;
    },  
        (error) => {
            return Promise.reject(error);
        }
    )

    api.interceptors.response.use( 
        (response) => {
            return response;
        },
        (error) => {
            if (error.response?.status === 401) {
            alert("Session expired");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        }
    )