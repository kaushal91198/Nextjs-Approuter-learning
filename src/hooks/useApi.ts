// src/hooks/useApi.ts

import { apiCall } from "@/axios";
import { useState } from "react";

const useApi = (config = {}) => {
  const [state, setState] = useState({ loading: false, error: null, data: null });

  const makeApiCall = (additionalConfig = {}) => {
    setState((old) => ({
      ...old,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
      apiCall({ ...config, ...additionalConfig })
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

