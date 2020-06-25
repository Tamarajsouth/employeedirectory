import React, {Component} from "react";
import "../App.css";

class EmployeeList extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>

                    </th>
                    <th>
                        Name:
                    </th>
                    <th>
                        Email:
                    </th>
                    <th>
                        Cell:
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((employee, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <img src={employee.picture.thumbnail} aria-hidden alt="Image"/>
                            </td>
                            <td>
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