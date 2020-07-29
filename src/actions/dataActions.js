const fileData = require('../data/Webdev_data2.json');

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
	type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (data) => ({
	type: FETCH_DATA_SUCCESS,
	payload: { data },
});

export const fetchDataFailure = (error) => ({
	type: FETCH_DATA_FAILURE,
	payload: { error },
});

export function fetchData() {
	return (dispatch) => {
		dispatch(fetchDataBegin());
		fileData
			? dispatch(fetchDataSuccess(fileData))
			: dispatch(fetchDataFailure({ message: 'File data not available' }));
		return;
	};
}
