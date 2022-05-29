import {
  URL_AUTH_SIGNIN,
  URL_AUTH_SIGNUP,
} from "../../assets/constants/database";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";

export const signup = (email, password, name) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, returnSecureToken: true }),
      });

      const result = await response.json();
      console.log(result);
      dispatch({
        type: SIGNUP,
        token: result.idToken,
        userId: result.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUTH_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(password);
    console.log("hola")
    const result = await response.json();
    console.log(result);

    dispatch({
      type: SIGNIN,
      token: result.idToken,
      userId: result.localId,
    });
  };
};
