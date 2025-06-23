import { apiCall, requestTypes } from "@/axios";
import { PRODUCT_API_BASE_PATH, PRODUCT_PORT } from "@/constant/apiEndPoint.constant";

export const getProducts = (cookieHeader: any) => {
    return apiCall(
        {
            method: requestTypes.GET,
            url: PRODUCT_API_BASE_PATH,
            headers: {
                Cookie: cookieHeader
            }
        },
        PRODUCT_PORT)
}
