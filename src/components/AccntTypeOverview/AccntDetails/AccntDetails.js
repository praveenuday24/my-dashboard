import React from "react";

const AccntDetails =({accntDetailsData})=>{
    // console.log(accntDetailsData);
    let details=accntDetailsData.Exchange;

        return(
            <div>
            <div>
                {details.map(item=>
                    <div key={item.index} className="ItemPage-item">
                            <p>{`Gift ID: ${item.id}`}</p>
                            <p>{item.contributorname}</p>
                            <p>{item.enteredDate}</p>
                            <p>{item.receivedDate}</p>
                            <p>{item.NoOfShares}</p>
                            <p>{item.Type}</p>
                            <p>{item.Amount}</p>
                            <p>{item.Status}</p>
                    </div>)
        }
            </div>
            <div>View Contribution Activity</div>
            </div>
        )
    }


export default AccntDetails;