// src/hooks/useApi.ts

import { apiCall } from "@/axios";
import { useState } from "react";

const useApi = (Service: string, config = {}) => {
  const [state, setState] = useState<{ loading: boolean, error: any, data: any }>({ loading: false, error: null, data: null });

  const makeApiCall = (additionalConfig = {}) => {
    setState((old) => ({
      ...old,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
      apiCall({ ...config, ...additionalConfig }, Service)
        .then((res) => {
          setState((old) => ({
            ...old,
            loading: false,
            data: res,
          }));

          resolve(res);
        })
        .catch((error) => {
          setState((old) => ({
            ...old,
            loading: false,
            error: error.message,
          }));

          reject(error);
        });
    });
  };

  return { ...state, refresh: makeApiCall };
};

export default useApi;

