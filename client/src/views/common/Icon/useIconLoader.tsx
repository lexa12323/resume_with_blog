import { useState, useEffect } from 'react'
import { IMoonIconProps, IIconProps } from './Icon'

export const useIconLoader = (props:IIconProps, iconJson: string) => {
    
    const [iconsData, setIconsData] = useState<IMoonIconProps>({...props})
    const [iconsLoaded, setIconsLoaded] = useState(false)
    useEffect(()=> {
      
      const getIcons = async () => {
        const icons = await import(`./${iconJson}.json`) 
        setIconsLoaded(true)
        setIconsData((prevState) => ({...prevState, iconSet: icons }))
      }
       getIcons()
       console.log('get icons ' + iconJson)
      
    }, [])

    return { iconsData, iconsLoaded }
}