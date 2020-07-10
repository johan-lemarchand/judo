export const FETCH_PRESENTATION = 'FETCH_PRESENTATION'; 
export const FETCH_PRESENTATION_SUCCESS = 'FETCH_PRESENTATION_SUCCESS';

export const fetchPresentation = () => ({
  type: FETCH_PRESENTATION,
});

export const fetchPresentationSuccess = (payload) => ({
  type: FETCH_PRESENTATION_SUCCESS,
  payload,
}); 
