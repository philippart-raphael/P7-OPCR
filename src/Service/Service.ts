import axios from "axios";
import { InterfaceLease } from "../Type/Lease";
import {AxiosResponse} from "axios";

export const getLeases = async (): Promise<AxiosResponse> => {
    try {
        return await axios.get(`/data/logements.json`);
    } catch (error) {
        console.error(error);
        throw(error);
    }
};

export const getLease = async (id: string): Promise<InterfaceLease[0]> =>  {
    try {
        const response = await getLeases();
        return response!.data.find((logement: InterfaceLease[0]) => logement.id === id);
    } catch (error) {
        console.error(error);
        throw(error);
    }
};
