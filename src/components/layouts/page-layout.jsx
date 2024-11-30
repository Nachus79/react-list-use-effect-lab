import React from 'react';

function PageLayout( {children}) {

    return (
        <div className="container m-15">
            {children}
        </div>
    );
}

export default PageLayout; 