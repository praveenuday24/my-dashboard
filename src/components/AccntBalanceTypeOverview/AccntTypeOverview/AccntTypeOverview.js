import React,{Component} from "react";
import AccntType from "./AccntType/AccntType";
import {accnttypeData} from "../../../data/AccntTypeData";
import {accntDetailsData} from "../../../data/AccntDetailsData";
import AccntDetails from "./AccntDetails/AccntDetails";
import styled from "styled-components";

const AccntTypesWrapper=styled.div`
background:#ffffff;
margin-left:20px;
padding:0;
`;



class AccntTypeOverview extends Component{

    state={
         accntTypeData:accnttypeData.AccntTypes,
         accntDetailsData:accntDetailsData
    }

    render(){
        return(
            <AccntTypesWrapper className="col-7">
                <AccntType accntTypeData={this.state.accntTypeData}></AccntType>
                <AccntDetails accntDetailsData={this.state.accntDetailsData}></AccntDetails>
            </AccntTypesWrapper>

        )
    }

}

export default AccntTypeOverview ;