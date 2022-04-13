interface TokenDTO {
  token: string,
  isLogged: boolean
}

const INITIAL_STATE = {
  token: '',
  isLogged: false
}

const authReducer = (state: TokenDTO = INITIAL_STATE ,action: any) => {

  if(action.type === 'SET_TOKEN') {
    return {
      ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error
      }
    }
  } 

  return state;
}

export default authReducer;