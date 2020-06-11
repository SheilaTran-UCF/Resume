import React from 'react';
const LayoutPage = (props) => {
    return (
        <>
            <div id="main-wrapper">
                <div className="columns-block container">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default React.memo(LayoutPage)
