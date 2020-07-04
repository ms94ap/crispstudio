import React from 'react'
import Calendar from 'rc-calendar';

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      value: new Date(),
    }
  }

  updateDateField = (value) => {
    const dateField = document.getElementById("date-input");
    if(dateField && value.isValid()){
      dateField.value = value.format("DD/MM/YYYY");
    }
  }
  
  onChange = (value) => {
    this.setState({ value });
    this.updateDateField(value);
  }

  render () {
    const { value } = this.state;

    return (
      <React.Fragment>
        <Calendar
          onChange={this.onChange}
          value={value}
        />
      </React.Fragment>
    );
  }
}