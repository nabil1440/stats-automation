import { createContext, useReducer } from 'react';
import reducer from './reducer';
import { SET_DATA, SET_FORM_DATA } from './types';

const initialState = {
  tableData: {},
  formData: ''
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // Reducer and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTableData = tableObj => {
    dispatch({
      type: SET_DATA,
      payload: tableObj
    });
  };

  const setFormData = data => {
    dispatch({
      type: SET_FORM_DATA,
      payload: data
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tableData: state.tableData,
        setTableData,
        formData: state.formData,
        setFormData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
