import React,{Component} from "react";
import Logo from "../Logo/Logo";
import Sections from "../Sections/Sections";
import {sectionData} from "../../data/sectiondata";

class SectionOverview extends Component{

    state={
        sectionItems:sectionData
    }

    render(){
        return(
            <div>
                <Logo></Logo>
                <Sections sectionlist={this.state.sectionItems}></Sections>
            </div>
        )
    }
}

export  default SectionOverview;