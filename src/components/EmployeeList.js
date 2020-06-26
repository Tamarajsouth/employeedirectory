import React, {Component} from "react";
import "../App.css";

class EmployeeList extends Component {
    render() {
        return (
            <table className="table">
                <thead className="employee-table">
                <tr>
                    {/* <th className="sort-by-column">
                        Name:
                    </th>
                    <th className="sort-by-column">
                        Email:
                    </th>
                    <th className="sort-by-column">
                        Phone Number:
                    </th> */}
                </tr>
                </thead>
                <tbody className="employee-data">
                {this.props.users.map((employee, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <img className="employee-image" src={employee.picture.thumbnail} aria-hidden alt="Image"/>
                            </td>
                            <td className="employee-name">
                                {employee.name.first + " " + employee.name.last}
                            </td>
                            <td>
                                {employee.email}
                            </td>
                            <td>
                                {employee.cell}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default EmployeeList;