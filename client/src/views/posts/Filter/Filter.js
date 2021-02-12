import React from 'react'
import PropTypes from 'prop-types';

export const Filter = ({categories, onChange}) => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value=''>All</option>
                {categories.map((item) => <option key={item._id} value={item._id}>{item.name}</option>)}
            </select>
        </div>
    )
}

Filter.propTypes = {
    categories: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};