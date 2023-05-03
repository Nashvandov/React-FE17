import { Component } from "react";
import { EmployeesListItem } from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {

	render(){
		let { employeers, onDeleteOne, onToggleStatus } = this.props
		console.log(employeers);
		return (
			<ul className="app-list list-group">
					{
						employeers.map((item, i)=>{
							let { name , salary, id, increase, rise } = item
							return <EmployeesListItem 
												key={i} 
												name={name} 
												salary={`${salary}$`}
												increase={increase}
												rise={rise}  
												onToggleStatus={(prop, status) => { onToggleStatus(prop, status, id) }}
												onDeleteTwo={() => onDeleteOne(id)}/>
						})
					}
			</ul>
		)
	}
}

export { EmployeesList };
