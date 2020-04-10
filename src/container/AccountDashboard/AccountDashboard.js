import React,{Component} from "react";
import SectionOverview from "../../components/SectionOverview/SectionOverview";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import {breadcrumData} from "../../data/braedcrumData";
import BalanceCard from "../../components/BalanceCard/BalanceCard"
import {balancedata} from "../../data/balanceData";
import {accntModeData} from "../../data/accntModeData";
import ModeOfAccnt from "../../components/ModeOfAccnt/ModeOfAccnt";
import AccntOverview from "../../components/AccntOverview/AccntOverview";
import {staticData} from "../../data/statictxtData";
import AccntTypeOverview from "../../components/AccntTypeOverview/AccntTypeOverview"


class AccountDashboard extends Component{

    state={
        breadcrumData:breadcrumData,
        balancedata:balancedata,
        accntModeData:accntModeData,
        staticData:staticData
        
    }

    render(){
    return(
        <div>
            <SectionOverview></SectionOverview>
            <BreadCrum breadCrumdata={this.state.breadcrumData}></BreadCrum>
            <BalanceCard balancedata={this.state.balancedata}></BalanceCard>
            <AccntOverview accntdata={this.state.staticData}></AccntOverview>
            <AccntTypeOverview></AccntTypeOverview>
            <ModeOfAccnt modedata={this.state.accntModeData}></ModeOfAccnt>

        </div>
    )
    }

}

export default AccountDashboard;