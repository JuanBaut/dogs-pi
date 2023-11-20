export const fetchDataRequest = () => {
  return {
    type: "FETCH_DATA_REQUEST",
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    error,
  };
};

export function fetchData() {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
}
