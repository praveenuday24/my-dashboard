import React,{Component} from "react";
import SectionOverview from "../../components/SectionOverview/SectionOverview";
import {accntModeData} from "../../data/accntModeData";
import ModeOfAccnt from "../../components/ModeOfAccnt/ModeOfAccnt";
import AccntViewSection from "../../components/AccntViewSection/AccntViewSection";
import AccntBalanaceTypeOverview from "../../components/AccntBalanceTypeOverview/AccntBalanceTypeOverview";
import styled from "styled-components";

const AccountDashboardWrapper=styled.div``;

class AccountDashboard extends Component{

    state={
        accntModeData:accntModeData,
    }

    render(){
    return(
        <AccountDashboardWrapper>
            <SectionOverview></SectionOverview>
            <AccntViewSection></AccntViewSection>
            <AccntBalanaceTypeOverview></AccntBalanaceTypeOverview>
            <ModeOfAccnt modedata={this.state.accntModeData}></ModeOfAccnt>

        </AccountDashboardWrapper>
    )
    }

}

export default AccountDashboard;