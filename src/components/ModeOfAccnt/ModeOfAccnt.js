import React from "react";


const ModeOfAccnt =({modedata})=>{
    return(
        <ul className="ItemPage-items">
        {modedata.map(item=>
        <li key={item.id} className="ItemPage-item">
            {item.name}
        </li>
        )}
    </ul>
    )
}
export default ModeOfAccnt;