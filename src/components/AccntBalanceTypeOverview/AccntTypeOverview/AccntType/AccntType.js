import React from "react";
import styled from "styled-components";

const AccntTypeWrapper=styled.ul`
display:flex;
padding:0;
border-top:solid 1px #f1f1f1;
margin:0;
`;

const AccntTypeList=styled.li`
    list-style:none;
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.5px;
    color: #505050;
    background:#eaeaea;
    padding:20px 20px;
    border-left:solid 1px #f1f1f1;
`;

const AccntType =({accntTypeData})=>{
    // console.log(accntTypeData);

    return(
        <AccntTypeWrapper className="ItemPage-items">
            {accntTypeData.map(item=>
                <AccntTypeList key={item.id} className="ItemPage-item">
                    {item.accntname}
                </AccntTypeList>
            )}
    </AccntTypeWrapper>
    )
}

export default AccntType;