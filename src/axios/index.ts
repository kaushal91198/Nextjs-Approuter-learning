
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { NEXT_PUBLIC_API_URL } from "../config";
import { AUTH_API_BASE_PATH } from "@/constant/apiEndPoint.constant";

export const requestTypes = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
};


async function sendRequest(axiosInstance: AxiosInstance, config: AxiosRequestConfig) {
  return await axiosInstance.request({
    url: NEXT_PUBLIC_API_URL + config.url,
    method: config.method,
    data: config.data,
    params: config.params,
    headers: { ...config.headers },
  });
}

async function generateAccessToken(axiosInstance: AxiosInstance) {
  await sendRequest(axiosInstance, {
    method: requestTypes.GET,
    url: `${AUTH_API_BASE_PATH}/refresh-token`,
  });
}


export async function apiCall(config: AxiosRequestConfig) {
  const axiosInstance = axios.create({
    withCredentials: true,
  });
  try {
    console.log("api call function")
    const res = await sendRequest(axiosInstance, config)
    return res.data;

  } catch (error: any) {
    if (error.response) {
      let message = '';
      const status = error.response.status;
      switch (status) {
        case 400:
          message = "Bad Request: The server could not understand the request.";
          break;
        case 401:
          try {
            console.log("first call")
            await generateAccessToken(axiosInstance);
            console.log("second call")
            const res = await sendRequest(axiosInstance, config)
            console.log("third call")
            return res.data;
          } catch (error) {
            message = "Unauthorized: Please log in.";
            break;
          }
        case 403:
          message = "Forbidden: You do not have permission to access this resource.";
          break;
        case 404:
          message = "Not Found: The requested resource could not be found.";
          break;
        case 500:
          message = "Internal Server Error: Something went wrong on the server.";
          break;
        default:
          message = `An error occurred. Status code: ${status}`;
          break;
      }
      throw new Error(message);
    } else if (error.request) {
      throw new Error("Network Error: No response received from the server.");
    } else {
      throw new Error("Something went wrong.");
    }
  }
}

