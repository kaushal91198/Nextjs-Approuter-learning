import { requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH, AUTH_PORT } from "@/constant/apiEndPoint.constant";
import useApi from "@/hooks/useApi";


export const useLogin = () => {
    const { refresh, ...rest } = useApi(AUTH_PORT);
    const postLogin = async (payload: any) => {
        const res: any = await refresh({
            method: requestTypes.POST,
            url: `${AUTH_API_BASE_PATH}/login`,
            data: payload,
        });
        return res;
    };
    return { postLogin, ...rest };
};


export const useLogout = () => {
    const { refresh, ...rest } = useApi(AUTH_PORT);
    const getLogout = async () => {
        const res: any = await refresh({
            method: requestTypes.GET,
            url: `${AUTH_API_BASE_PATH}/logout`,
        });
        return res.data;
    };
    return { getLogout, ...rest };
};


