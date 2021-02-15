import React from 'react';
import PropTypes from 'prop-types';
import iconSet from "./selection.json";
import iconBrendSet from "./brands.json";
//TODO brands and selection is too large. Bandle too large

export const Icon = (props) => {
    const decoratorProps = {...props, iconSet: iconSet}
    return (
        < MoonIcon {...decoratorProps }/>
    )
};

export const BrandIcon = (props) => {
    const decoratorProps = {...props, iconSet: iconBrendSet}
    return (
        < MoonIcon {...decoratorProps }/>
    )
};

const MoonIcon = ({iconSet, name, styles, size = '24', ...rest}) => {
    const find = iconEl => iconEl.tags.includes(name);
    const currentIcon = iconSet.icons.find(find);
    const renderPath = iconObj => (path, index) => {
      const attrs = (iconObj.attrs && iconObj.attrs[index]) || {};
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