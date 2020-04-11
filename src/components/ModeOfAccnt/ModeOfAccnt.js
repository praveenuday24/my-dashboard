import React from "react";
import styled from "styled-components";


const ModeOfAccntwrapper=styled.ul`
display:flex;
padding:30px 140px;
`;

const ModeList=styled.li`
list-style:none;
background:#006778;
padding:16px 0;
width:273px;
text-align:center;
margin-right:20px;
font-family: HelveticaNeue;
font-size: 16px;
font-weight: bold;
font-stretch: condensed;
letter-spacing: 0.5px;
color: #ffffff;
`;


const ModeOfAccnt =({modedata})=>{
    return(
        <ModeOfAccntwrapper className="ItemPage-items">
        {modedata.map(item=>
        <ModeList key={item.id} className="ItemPage-item">
            {item.name} >
        </ModeList>
        )}
    </ModeOfAccntwrapper>
    )
}
export default ModeOfAccnt;