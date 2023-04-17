import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {
	render(){
		let { employeers, onDeleteOne } = this.props
		console.log(employeers);
		return (
			<ul className="app-list list-group">
					{
						employeers.map((item, i)=>{
							let { name , salary, id } = item
							return <EmployeesListItem key={i} name={name} salary={`${salary}$`}  onDeleteTwo={() => onDeleteOne(id)}/>
						})
					}
			</ul>
		)
	}
}

export default EmployeesList;
