import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Chart.css';

class Chart extends React.Component {
	render() {
		const { data } = this.props.data;
		const { sales } = data;
		const keys = sales && Object.keys(sales[0]);

		return (
			<div className="container">
				{' '}
				{sales ? (
					<BootstrapTable data={sales} striped={true} hover={true}>
						{keys &&
							keys.map((key, id) => {
								return (
									<TableHeaderColumn
										dataField={key}
										isKey={id === 0}
										dataAlign="center"
										width="200" 
									>
										{key}
									</TableHeaderColumn>
								);
							})}
					</BootstrapTable>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data,
});

export default connect(mapStateToProps)(Chart);
