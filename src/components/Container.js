/* Container Box */
/* IMPORTS */
import API from "../utils/API";
import React, { Component } from "react"
import SearchBar from "./SearchBar"
import DataTable from "./DataTable"
import "./style.css";


class Container extends Component {
    // Setting the component's initial state
    state = {
    //search starts as an empty string
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""

    };

/* ComponentDidMount
Set State  */
componentDidMount() {
//    set state
// make API call to show data when page is first loaded
}

// Filtering Events
employeeSearch = () => {
// triggers API call
}

sortByName = () {
// filter and sort column of employee name by ascending/descending order
}

handleInputChange = event () {
// to dynamically change output based on user input
};

// when search button is clicked
handleSearch = event => {

}


render() {

    return (
        <div>

            <SearchBox
                employee={this.state.employees}
                handleSearch={this.handleSearch}
                handleInputChange={this.handleInputChange} />
            <TableData results={this.state.filteredEmployees}
                sortByName={this.sortByName}

            />
        </div >


    )
}

export default Container
