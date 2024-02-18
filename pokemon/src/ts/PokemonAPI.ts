import axios from "axios";

const getRawJSON = async (link: string): Promise<any> => {
    const response = await axios.get(link);
    return response.data;
}

export const getJSONData = async <T>(link: string, setterFunction: React.Dispatch<React.SetStateAction<T | null>> | null = null): Promise<T> => {
    let response = await getRawJSON(link);
    if (setterFunction) setterFunction(response as T);
    return response as T;
}