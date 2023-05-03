import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
	onRise = (e) => {
		this.props.onToggleStatus("rise", !this.props.rise)
		console.dir(e.target)
	}

	onIncrease = (e) => {
		this.props.onToggleStatus("increase", !this.props.increase)
		console.dir(e.target)
	}
	
	render(){
		let { name , salary, onDeleteTwo, increase, rise } = this.props;
		let clazz = "list-group-item d-flex justify-content-between"

		if(rise){
			clazz += " like"
		}

		if(increase){
			clazz += " increase"
		}
		
		return (
			<li  className={clazz}>
				<span className="list-group-item-label" onClick={this.onRise}>{name}</span>
				<input type="text" className="list-group-item-input" value={salary}/>
				<div className='d-flex justify-content-center align-items-center '>
					<button type="button"
							className="btn-cookie btn-sm"
							onClick={this.onIncrease}
							>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
									className="btn-trash btn-sm "
									onClick={onDeleteTwo}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star "></i>
				</div>
			</li>
	)
	}
}

export { EmployeesListItem };