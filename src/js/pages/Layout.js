import React from "react";
import {Link} from 'react-router';
import Nav from '../components/layout/Nav';

export default class Layout extends React.Component {
	navigate(){
		this.props.history.pushState(null,"/");
	}
  render() {
  	const {location } = this.props;

  	const containerStyle ={
  		marginTop: "60px"
  	};
    return (

    <div>
    	<Nav location={location}/>

    	<div className="container"  style={containerStyle}>
    		<div className="row">
	    		<div className="col-lg-12">
				    <h1>Killer news</h1>
				    {this.props.children}
			    </div>
		    </div>
    	</div>
    </div>
    );
  }
}
