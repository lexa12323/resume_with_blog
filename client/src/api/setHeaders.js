import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { storageLabel } from '../constants/common'

export const apiInterceptors = (API) => {

    //const fp = await FingerprintJS.load();
      
    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    //const result = await fp.get();
    
    // This is the visitor identifier:
    //const visitorId = result.visitorId;

    API.interceptors.request.use((req) => {
        if(localStorage.getItem(storageLabel)){
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(storageLabel)).token}`
        }
        //req.headers.devicefingerprint = visitorId
        return req;
    })

    API.interceptors.response.use(
        (response) => {
          return response;
        },
        function (error) {
          console.log('error')
          const originalRequest = error.config;
          let refreshToken = localStorage.getItem("refreshToken");
      if (
            refreshToken &&
            error.response.status === 401 &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;
            return API
              .post(`/user/refresh_token`, { refreshToken: refreshToken })
              .then((res) => {
                console.log("Access token refreshing!");
                if (res.status === 200) {
                  localStorage.setItem("accessToken", res.data.accessToken);
                  console.log("Access token refreshed!");
                  return API(originalRequest);
                }
              });
          }
          return Promise.reject(error);
        }
      );
      
}