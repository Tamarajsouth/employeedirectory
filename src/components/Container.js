import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import getUsers from "../utils/API";

class Container extends React.Component {
    state = {
        users: [],
        filteredUsers: []
    }

    componentDidMount() {
        getUsers().then((res) => {
            this.setState({users: res.data.results, filteredUsers: res.data.results})
        })
    }

    search = (term) => {
        const filteredEmployees = this.state.users.filter((employee) => {
            if(employee.cell.includes(term) || (employee.name.first + " " + employee.name.last).includes(term) || employee.email.includes(term)) {
                return employee
            }
        });
        this.setState({filteredUsers: filteredEmployees});
    }

    render() {
        return (
            <div>
                <Header search={this.search} />
                <EmployeeList users={this.state.filteredUsers}/>
            </div>
        )
    }
}

export default Container;