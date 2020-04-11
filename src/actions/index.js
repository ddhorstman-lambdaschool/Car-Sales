export const ACTIONS = {
  ADD_FEATURE: "ADD_FEATURE",
  REMOVE_FEATURE: "REMOVE_FEATURE",
  BUY_CAR: "BUY_CAR",
};
export function addFeature(id) {
  return {
    type: ACTIONS.ADD_FEATURE,
    payload: id,
  };
}
export function removeFeature(id) {
  return {
    type: ACTIONS.REMOVE_FEATURE,
    payload: id,
  };
}
export function buyCar() {
  return {
    type: ACTIONS.BUY_CAR,
  };
}
