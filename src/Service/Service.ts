import axios from 'axios';

export const getLeases = async () => {
    try {
        return await axios.get(`data/logements.json`);
    } catch (error) {
        console.error(error);
    }
}

export const getLease = async (id: string) => {

}
