import { ACTIONS } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export default function carFeatureReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_FEATURE:
      const addedFeature = state.additionalFeatures.find(x => x.id === action.payload);
      //do nothing if the feature has already been added
      if (state.car.features.includes(addedFeature)) return state;
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, addedFeature],
        },
        additionalPrice: state.additionalPrice + addedFeature.price,
        additionalFeatures: state.additionalFeatures.filter(x=> x.id !== action.payload),
      };
    case ACTIONS.REMOVE_FEATURE:
      const featureToRemove = state.car.features.find(x => x.id === action.payload);
      //do nothing if the feature has never been added
      if (!state.car.features.includes(featureToRemove)) return state;
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(x => x.id !== action.payload),
          ],
        },
        additionalPrice: state.additionalPrice - featureToRemove.price,
        additionalFeatures: [
          ...state.additionalFeatures,
          featureToRemove
        ],
      };
    case ACTIONS.BUY_CAR:
      return initialState;
    default:
      return state;
  }
}
