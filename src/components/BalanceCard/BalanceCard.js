import React from "react";

const Balancecard=({balancedata})=>{
    return(
        <div>
            {balancedata.map(item=>
                <p key={item.id}>{item.accnttype}{item.value}{item.text}</p>
                // <p>{item.value}</p>
            )}
        </div>
    )
}

export default Balancecard;