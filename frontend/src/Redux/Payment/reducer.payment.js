import * as types from "./actionType.payment";
const initialState = {
  isPaymentLoading:false,
  isPaymentSuccess:false,
  isPaymentError:false,
  msg:""
};

export const reducer = (state = initialState, { type, payload }) => {
    console.log({payload});
  switch (type) {
    case types.PAYMENT_REQUEST:
      return { ...state, isPaymentLoading: true };
    case types.PAYMENT_SUCCESS:
      return { ...state, isPaymentLoading: false, isPaymentSuccess: true, msg:payload };
    case types.PAYMENT_FAILURE:
      return { ...state, isPaymentLoading: false, isPaymentError: true };

    default:
      return state;
  }
};