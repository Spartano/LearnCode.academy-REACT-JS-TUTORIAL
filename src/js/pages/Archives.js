import React from "react";



export default class Archives extends React.Component {
  render() {
  	const {query} = this.props.location;
  	const {date, filter} = query;
    return (
    <div>
    <h1>archives{this.props.params.article}</h1>
    <h4>date: {date}, filter:{filter}</h4>
    </div>
    );
  }
}
