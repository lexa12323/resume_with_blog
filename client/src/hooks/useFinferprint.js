import {useState, useCallback, useEffect} from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs';

//const storageName = 'browserFingerprint'

export const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState(null)
  const [ready, setReady] = useState(false)

  const getFingerprint = useCallback(async () => {

    const fp = await FingerprintJS.load();
    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    setFingerprint(visitorId);
    setReady(true);
    
  }, [])

  useEffect(() => {
    getFingerprint()
  }, [getFingerprint])


  return { fingerprint, ready }
}
