import axios from '../../axios-api';

export const FETCH_LINK_SUCCESS = 'FETCH_LINK_SUCCESS';

export const fetchLinkSuccess = response => ({type: FETCH_LINK_SUCCESS, response});

export const shortLink = originalLink => {
    return dispatch => {
        return axios.post('/', originalLink).then(
            response => {
                dispatch(fetchLinkSuccess(response.data));
            });
    };
};