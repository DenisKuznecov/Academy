export function getData() {
  return {
    type: 'FETCHING_DATA'
  };
}

export function getDataSuccess(payload) {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    payload
  };
}

export function getDataFailure(payload) {
  return {
    type: 'FETCHING_DATA_FAILURE',
    payload
  }
}