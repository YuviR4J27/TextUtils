import React from 'react'

export default function Alert(props) {
    let capitalize = (text)=>{
        let upper = text.toLowerCase()
        return upper[0].toUpperCase() + upper.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}: </strong> {props.alert.msg}
        </div>
    )
}
