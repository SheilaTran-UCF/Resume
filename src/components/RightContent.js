import React from 'react'


const RightContent = (props) => {
    return (
        <>
            <div className="right-col-block blocks">
                {props.children}
            </div>
        </>
    )
}

export default React.memo(RightContent)
