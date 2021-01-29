import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const apiInterceptors = async (API) => {

    const fp = await FingerprintJS.load();
      
    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();
    
    // This is the visitor identifier:
    const visitorId = result.visitorId;

    API.interceptors.request.use((req) => {
        if(localStorage.getItem('profile')){
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
            req.headers.devicefingerprint = visitorId
        }
        return req;
    })
}