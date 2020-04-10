import React,{Component} from "react";
import AccntType from "../AccntTypeOverview/AccntType/AccntType";
import {accnttypeData} from "../../data/AccntTypeData";
import {accntDetailsData} from "../../data/AccntDetailsData";
import AccntDetails from "../AccntTypeOverview/AccntDetails/AccntDetails";



class AccntTypeOverview extends Component{

    state={
         accntTypeData:accnttypeData.AccntTypes,
         accntDetailsData:accntDetailsData
    }

    render(){
        return(
            <div>
                <AccntType accntTypeData={this.state.accntTypeData}></AccntType>
                <AccntDetails accntDetailsData={this.state.accntDetailsData}></AccntDetails>
            </div>

        )
    }

}

export default AccntTypeOverview ;