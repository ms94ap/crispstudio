import React from 'react'
import Calendar from 'rc-calendar';

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      value: new Date(),
    }
  }


  
  onChange = (value) => {
    this.setState({ value });
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