const initialState = {
  user: null,
};

export function setUser(payload) {
  return {
    type: "SET_USER",
    payload: payload,
  };
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
        return {...state, user: action.payload}
    default:
      return state;
    
  }
}

/*
* FRONTEND CODE BELOW:
in auth component: 
* import setUser from the authReducer
* import {connect} from react-redux
export default connect(null, {setUser})(componentName)

* after axios calls in functions:
props.setUser(res.data)

! map state to props is not needed because we do not need user info on the login screen


in any other component:
! pass in props into component
* import {connect} from react-redux
* import setUser from the authReducer

const mapStateToProps = (reduxState) => {
    return reduxState.authReducer
}

export default connect(mapStateToProps)(componentName)

* to get user object, or check if user is logged in you use props.user
*/
