import { requestTypes } from "@/axios";
import { PRODUCT_API_BASE_PATH, PRODUCT_PORT } from "@/constant/apiEndPoint.constant";
import useApi from "@/hooks/useApi";


export const useProduct = () => {
    const { refresh, ...rest } = useApi(PRODUCT_PORT);
    const addProduct = async (payload: any) => {
        const res: any = await refresh({
            method: requestTypes.POST,
            url: `${PRODUCT_API_BASE_PATH}`,
            data: payload,
        });
        return res.data;
    };
    return { addProduct, ...rest };
};


export const getCategory = () => {
    const { refresh, ...rest } = useApi(PRODUCT_PORT);
    const getCategories = async () => {
        const res: any = await refresh({
            method: requestTypes.GET,
            url: `${PRODUCT_API_BASE_PATH}/category`,
        });
        return res.data;
    };
    return { getCategories, ...rest };
};


