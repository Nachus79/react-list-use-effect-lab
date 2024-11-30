import React from 'react';

function PageLayout( {children}) {

    return (
        <div className="container m-6"> {/*REVISAR EL NÚMERO*/}
            {children}
        </div>
    );
}

export default PageLayout; 