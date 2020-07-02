import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";

export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_PIC = "UPDATE_PIC";

const loginSucces = (userWithToken) => {
  return {
    type: LOGIN_SUCCES,
    payload: userWithToken,
  };
};

const picUpdateSucces = (picture) => {
  return {
    type: UPDATE_PIC,
    payload: picture,
  };
};

// const tokenStillValid = (userWithoutToken) => {
//   return {
//     type: TOKEN_STILL_VALID,
//     payload: userWithoutToken,
//   };
// };

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password, picture) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(`${apiUrl}/users/signup`, {
        name,
        email,
        password,
        picture,
      });

      dispatch(loginSucces(res.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });

      dispatch(loginSucces(res.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updatePic = (url) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const res = await axios.post(
      `${apiUrl}/users/picture`,
      {
        url,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(picUpdateSucces(res.data));
  } catch (error) {
    console.log(error);
  }
};
