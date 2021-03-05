import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useIconLoader } from './useIconLoader'

//TODO brands and selection is too large. Bandle too large

interface IIconElement{
  tags: string[]
}

interface IIconObject{
  attrs: []
}

export interface IIconProps {
  fill?: string,
  name: string,
  styles?: string[],
  size?: string,
}

export interface IMoonIconProps extends IIconProps{
  iconSet?: {
    icons: any[],
    selection?: any[],
    metadata: {},
    height: number,
    prevSize: number,
    colorThemes?: string[],
    preferences: {},
    IcoMoonType: string
  },
}

export const Icon: React.FC<IIconProps> = (props) => {
    //const decoratorProps = {...props, iconSet: iconSet}
    const {iconsData , iconsLoaded} = useIconLoader(props, 'selection')
    if (!iconsLoaded) return null
    return (
        < MoonIcon {...iconsData }/>
    )
};

export const BrandIcon: React.FC<IIconProps> = (props) => {
  const {iconsData , iconsLoaded} = useIconLoader(props, 'brands')
  if (!iconsLoaded) return null
    return (
        < MoonIcon {...iconsData }/>
    )
};

const MoonIcon: React.FC<IMoonIconProps> = ({iconSet, name, styles, size = '24', ...rest}) => {
    const find = (iconEl: IIconElement) => iconEl.tags.includes(name);
    const currentIcon = iconSet && iconSet.icons.find(find);
    const renderPath = (iconObj: IIconObject) => (path: string, index: number) => {
      const attrs = (iconObj!.attrs && iconObj!.attrs[index]) || {};
      return <path /*style={styles.path}*/ key={index} d={path} {...attrs} />;
    };
  
    if (currentIcon) {
      return (
        <svg
          /*style={styles.svg}*/
          width={size}
          height={size}
          viewBox={`0 0 1024 1024`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          {currentIcon.paths.map(renderPath(currentIcon))}
        </svg>
      );
    }
    return null;
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};