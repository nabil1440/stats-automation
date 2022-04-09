import { SET_DATA, CALCULATE_CENTRAL_TENDENCY, SET_FORM_DATA } from './types';

export default function (state, { type, payload }) {
  switch (type) {
    case SET_FORM_DATA:
      return { ...state, formData: payload };
    case SET_DATA:
      return { ...state, tableData: payload };
    case CALCULATE_CENTRAL_TENDENCY:
      return { ...state };
    default:
      return { ...state };
  }
}
