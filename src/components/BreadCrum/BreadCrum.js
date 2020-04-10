import React from "react";


const BreadCrum=({breadCrumdata})=>{
    // console.log(breadCrumdata);

    return(
        <div>
        {breadCrumdata.map(item=>
            <h5 key={item.id} className="ItemPage-item">
                {item.name}
            </h5>
            )}
            </div>
    )
}

export default BreadCrum ;