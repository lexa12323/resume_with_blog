import React from 'react';
import PropTypes from 'prop-types';
import iconSet from "./selection.json";
import iconBrendSet from "./brands.json";

//TODO brands and selection is too large. Bandle too large

interface IIconElement{
  tags: string[]
}

interface IIconObject{
  attrs: []
}

interface IIconProps {
  fill?: string,
  name: string,
  styles?: string[],
  size?: string,
}

interface IMoonIconProps extends IIconProps{
  iconSet: {
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
    const decoratorProps = {...props, iconSet: iconSet}

    return (
        < MoonIcon {...decoratorProps }/>
    )
};

export const BrandIcon: React.FC<IIconProps> = (props) => {
    const decoratorProps = {...props, iconSet: iconBrendSet}
    return (
        < MoonIcon {...decoratorProps }/>
    )
};

const MoonIcon: React.FC<IMoonIconProps> = ({iconSet, name, styles, size = '24', ...rest}) => {
    const find = (iconEl: IIconElement) => iconEl.tags.includes(name);
    const currentIcon = iconSet.icons.find(find);
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