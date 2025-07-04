import { requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH } from "@/constant/apiEndPoint.constant";
import useApi from "@/hooks/useApi";


export const usePostLogin = () => {
    const { refresh, ...rest } = useApi();
    const postLogin = async (payload: any) => {
        const res: any = await refresh({
            method: requestTypes.POST,
            url: `${AUTH_API_BASE_PATH}/login`,
            data: payload,
        });
        return res.data;
    };
    return { postLogin, ...rest };
};


