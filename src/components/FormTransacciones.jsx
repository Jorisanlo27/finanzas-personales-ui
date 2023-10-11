import React, { Component } from 'react';
import Egresos from '../pages/Egresos';
import Ingresos from '../pages/Ingresos';

class FormTransacciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedForm: null,
    };
  }

  handleFormSelection = (event) => {
    this.setState({
      selectedForm: event.target.value,
    });
  };

  renderForm() {
    const { selectedForm } = this.state;

    if (selectedForm === "form1") {
      return (
        <Ingresos list={false} />
      );
    } else if (selectedForm === "form2") {
      return (
        <Egresos list={false} />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title mr-5">New Transaction</h3>
          <label>
            Income
            <input
              type="radio"
              name="formType"
              value="form1"
              onChange={this.handleFormSelection}
              className="ml-2" />
          </label>

          <label className="ml-5">
            Expense
            <input
              type="radio"
              name="formType"
              value="form2"
              onChange={this.handleFormSelection}
              className="ml-2" />
          </label>
        </div>
        <div id="renderedForm">
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default FormTransacciones;