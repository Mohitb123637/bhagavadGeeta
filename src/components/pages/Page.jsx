import React from 'react'
import "../../styles/page.css"


const Page = React.forwardRef((props, ref) => {
    return (
        <div className="container demoPage" ref={ref}>
            <div className='h-full'>
                {props.children}
            </div>
        </div>
    );
});

export default Page