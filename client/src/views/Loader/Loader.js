import React from 'react'

const Loading = () => {
    return(
        <div>loading</div>
    )
}

export const LoaderOrClidren = ({children, loading}) => {
    return (
        <div>
            { loading ? children : <Loading /> }
        </div>
    )
}

export const Loader = ({error, ...rest}) => {
    return (
        <div>
            { error ? <p>Loading error</p> : <LoaderOrClidren {...rest}/> }
        </div>
    )
}


