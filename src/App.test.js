import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import authReducer from './store/reducers/authReducer';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
describe('login reducer',()=>{  
  it('should return default state', () => {
    const status ={
      authError: null, 
      name: null, 
      userId: null
    }      
    
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(status)
  })
  it('should update state if logging incorrect', () => {
    const status ={
      authError: "login niet geslaagd", 
      name: null, 
      userId: null
    }      
    const newState = authReducer(undefined, {type: "LOGIN_ERROR"});      
    expect(newState).toEqual(status)      
  })
  it('should update state if logging in correct', () =>{
    const status ={
      authError: null, 
      name: "test", 
      userId: 0
    }     
    const newState = authReducer(undefined, {type: "LOGIN_SUCCES", id: 0, name: "test"});
    expect(newState).toEqual(status)
  })
  it('should not respond to unknown actions', () => {
    const status ={
      authError: null, 
      name: null, 
      userId: null
    }      
    
    const newState = authReducer(undefined, {type: "DAFUQ is this action"});
    expect(newState).toEqual(status)
  })
})