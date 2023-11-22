import axios from "axios";



export const getById = async (id: string) => {
    try {
        const response = await axios.get(`https://www.themuse.com/api/public/jobs/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}