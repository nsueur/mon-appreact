import React from 'react'

function Button({type, children}){
    const className="btn btn-" + type
    return <button className={className}>{children}</button>
}

export default Button