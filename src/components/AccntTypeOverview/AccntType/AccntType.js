import React from "react";

const AccntType =({accntTypeData})=>{
    // console.log(accntTypeData);

    return(
        <ul className="ItemPage-items">
        {accntTypeData.map(item=>
        <li key={item.id} className="ItemPage-item">
            {item.accntname}
        </li>
        )}
    </ul>
    )
}

export default AccntType;