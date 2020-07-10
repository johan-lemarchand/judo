export const FETCH_SPONSORS = 'FETCH_SPONSORS'; 
export const FETCH_SPONSORS_SUCCESS = 'FETCH_SPONSORS_SUCCESS';

export const fetchSponsors = () => ({
  type: FETCH_SPONSORS,
});

export const fetchSponsorsSuccess = (payload) => ({
  type: FETCH_SPONSORS_SUCCESS,
  payload,
}); 
