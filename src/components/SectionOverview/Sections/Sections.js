import React from "react";
import styled from "styled-components";

const SectionWrapper=styled.ul`
    margin:0;
    padding:0;
    display:flex;
`;

const SectionList=styled.li`
    font-size:14px;
    color:#022737;
    list-style-type:none;
    marhin:0;
    padding-right:20px;
    font-family: HelveticaNeue;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0.5px;
      }
`;

const Sections=({sectionlist})=>{
    // console.log(sectionlist);

        return(
            <SectionWrapper>
            {sectionlist.map(item=>
            <SectionList key={item.id} className="ItemPage-item">
                {item.name}
            </SectionList>
            )}
        </SectionWrapper>
        )
    }

export default Sections;