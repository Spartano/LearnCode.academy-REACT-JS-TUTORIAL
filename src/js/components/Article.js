import React from 'react';


export default class Article extends React.Component{

	render(){
		const {title} = this.props;

		return(
			<div className="col-md-4">
				<h2>{title}</h2>
				<p>asldfjalsjfaslkjflsk laskdjf a;lsdkfj lkjas;lkdfjasldkfj lkajsd;lfkjasd lfkajsdf ;askljfasldkfj </p>
				<a className="btn btn-default" href="#">More Info </a>

			</div>	
			);
	}
}