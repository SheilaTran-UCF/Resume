import React from 'react'


const LeftContent = (props) => {
    return (
        <>
            <div className="left-col-block blocks">
                {props.children}
            </div>
        </>
    )
}

export default React.memo(LeftContent)
