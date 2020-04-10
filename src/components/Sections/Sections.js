import React from "react";




const Sections=({sectionlist})=>{
    // console.log(sectionlist);

        return(
            <ul className="ItemPage-items">
            {sectionlist.map(item=>
            <li key={item.id} className="ItemPage-item">
                {item.name}
            </li>
            )}
        </ul>
        )
    }

export default Sections;