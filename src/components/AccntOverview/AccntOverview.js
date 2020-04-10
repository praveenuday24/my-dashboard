import React from "react";
import moment from 'moment';

const AccntOverview =({accntdata})=>{

    let newDate=new Date();
    let formattedDate=moment(newDate).format('DD/MM/YYYY'); 

    return(
        <div>
            <h3>Account Overview</h3>
            <p>{accntdata.accountdetails[0].fundname}</p>
            <p>Balance as of {formattedDate}</p>
        </div>
    )

}

export default AccntOverview ;