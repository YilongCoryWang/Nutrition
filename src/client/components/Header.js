import React from "react";
import ResultList from "./ResultList";
import SearchBox from "./SearchBox";
import Calender from "./Calender";

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="header">
                <SearchBox></SearchBox>
                <ResultList></ResultList>
                <Calender></Calender>
            </div>
        )
    }
}

export default Header;