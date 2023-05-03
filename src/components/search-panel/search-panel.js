import React, { Component } from "react"
import './search-panel.css';

class SearchPanel extends Component{
    render() {
        let { onChangeSearch, temp } = this.props
        return (
            <input type="text"
                    value={temp}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    className="form-control search-input"
                    placeholder="Найти сотрудника"/>
        )
    }
}

export { SearchPanel };