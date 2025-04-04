import axios from 'axios';
import { getEnv } from '../helpers/getEnv';


const {VITE_API_URL}=getEnv();

const apiSeleccion=axios.create({

    baseURL:VITE_API_URL


})

export default apiSeleccion;