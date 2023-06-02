import { SliceCreator } from "../store";

export interface AuthState {
  // Prefix used to differentiate slices
  auth: {
    /**
     * The auth token used to verify requests to the backend
     */
    token: string | null;
    /**
     * Action to set the token
     */
    setToken: (token: string | null) => void;
    /**
     * Action to remove the token
     */
    removeToken: () => void;
  };
}

export const createAuthSlice: SliceCreator<AuthState> = (set) => ({
  auth: {
    token: null,
    setToken: (token) =>
      // set is a state alteration method from Zustand
      set(
        // state is the previous state, normally this should not be altered,
        // but with Immer, it is the preferred way to do it
        (state) => {
          state.auth.token = token;
        },
        // If true, it will overwrite the entire state with the state from the callback
        false,
        // Used to give a name to the logged action in redux devtools
        "auth/setToken"
      ),
    removeToken: () =>
      // set is a state alteration method from Zustand
      set(
        // state is the previous state, normally this should not be altered,
        // but with Immer, it is the preferred way to do it
        (state) => {
          state.auth.token = null;
        },
        // If true, it will overwrite the entire state with the state from the callback
        false,
        // Used to give a name to the logged action in redux devtools
        "auth/removeToken"
      ),
  },
});
