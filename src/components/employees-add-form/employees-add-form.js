import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
	state = {
		name: '',
		salary: ''
	}
	
	addUserInfo = (e) => {
		this.setState(() => {
			return {
				[e.target.name]: e.target.value 
			}
		})
	}

	sendUserInfo = (e) => {
		e.preventDefault()
		if(this.state.name && this.state.salary){
			let obj = {
				name: this.state.name,
				salary: this.state.salary
			}
			this.props.addEmployee(obj)
		}
		this.setState(() => {
			return {
				name: "",
				salary: ""
			}
		})
	}

	render(){
		const { name, salary } = this.state
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
						className="add-form d-flex"
						onSubmit={this.sendUserInfo}>
					<input type="text"
								className="form-control new-post-label"
								placeholder="Как его зовут?" 
								name="name"
								value={name}
								onChange={this.addUserInfo}/>
					<input type="number"
								className="form-control new-post-label"
								placeholder="З/П в $?" 
								name="salary"
								value={salary}
								onChange={this.addUserInfo}/>
					<button type="submit"
										className="btn btn-outline-light">Добавить</button>
					</form>
			</div>
	)
	}
}

export { EmployeesAddForm };