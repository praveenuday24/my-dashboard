import React ,{Component}from "react";

const AccntDetails =({accntDetailsData})=>{
    console.log(accntDetailsData);
    let details=accntDetailsData.Contributions;

        return(
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
        )
    }


export default AccntDetails;