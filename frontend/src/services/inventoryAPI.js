
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/inventory";


export const addInventory = (data) => axios.post(`${BASE_URL}/add`, data);