export const ACTIONS = {
    ADD_FEATURE: "ADD_FEATURE"
};
export function addFeature(payload){
    return {
        type: ACTIONS.ADD_FEATURE,
        payload
    }
}