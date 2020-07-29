import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import './RetailerTile.css';

class RetailerTile extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchData());
	}

	render() {
		const { data } = this.props.data;
		const { image, subtitle, tags, title } = data;

		return (
			<div className="col">
				<img className="img" src={image} alt={subtitle}></img>
				<p className="title">{title}</p>
				<p className="subtitle">{subtitle}</p>
				<div className="tags">
					{tags &&
						tags.map((tag, i) => {
							return <span key={i}>{tag}</span>;
						})}
				</div>
				<div className="icons">
					<p>OVERVIEW</p>
					<p>SALES</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data,
});

export default connect(mapStateToProps)(RetailerTile);
