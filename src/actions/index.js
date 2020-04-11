export const ACTIONS = {
    ADD_FEATURE: "ADD_FEATURE",
    REMOVE_FEATURE: "REMOVE_FEATURE",
    BUY_CAR: "BUY_CAR"
};
export function addFeature(payload){
    return {
        type: ACTIONS.ADD_FEATURE,
        payload
    }
}
export function removeFeature(payload){
    return {
        type: ACTIONS.REMOVE_FEATURE,
        payload
    }
}
export function buyCar(){
    return {
        type:ACTIONS.BUY_CAR
    }
}