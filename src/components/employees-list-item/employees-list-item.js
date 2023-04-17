import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
	state = {
		rise: false,
		increase: false
	}
	onRise = () =>{
		this.setState( ({ rise }) => { 
			return { rise : !rise } 
		} )
	}
	// onIncrease = () => {
	// 	this.setState(() => {
	// 		return { 
	// 			increase: !this.state.increase 
	// 		}
	// 	})
	// }

	onIncrease = () => {
		this.setState(({increase}) => ({increase: !increase}))
		console.log('click')
	}

	render(){
		let { name , salary, onDeleteTwo } = this.props;
		let { rise, increase } = this.state
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
				<input type="text" className="list-group-item-input" defaultValue={salary}/>
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

export default EmployeesListItem;