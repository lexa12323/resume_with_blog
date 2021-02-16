import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { storageLabel } from '../constants/common'

export const apiInterceptors = (API) => {

  API.interceptors.request.use((req) => {
    if (localStorage.getItem(storageLabel)) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(storageLabel)).token}`
    }
    return req;
  })

  API.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      const userJson = JSON.parse(localStorage.getItem("user"));
      if (!userJson) return
      const { refreshToken } = userJson;

      if (
        refreshToken &&
        error.response.status === 401 &&
        originalRequest.url !== '/user/refresh_token'
      ) {
        originalRequest._retry = true;
        return API
          .post(`/user/refresh_token`, { refreshToken: refreshToken })
          .then((res) => {
            console.log("Access token refreshing!");
            if (res.status === 200) {
              localStorage.setItem("user", JSON.stringify({ ...userJson, token: res.data.accessToken, refreshToken: res.data.refreshToken }));
              console.log("Access token refreshed!");
              return API(originalRequest);
            }
          }).catch((e) => {
            localStorage.removeItem("user")
          });
      }
      return Promise.reject(error);
    }
  );

}

export const apiInterceptorsAsync = async (API) => {

  const fp = await FingerprintJS.load();
  const result = await fp.get();
  
  const visitorId = result.visitorId;

  API.interceptors.request.use((req) => {
    req.headers.devicefingerprint = visitorId
    return req;
  })

}