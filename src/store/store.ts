import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { AuthState, createAuthSlice } from "./slices/authSlice";
import { StateCreator } from "zustand/vanilla";
import { STORE_NAME, STORE_VERSION } from "../constants";
import { merge } from "lodash-es";

export type CombinedState = AuthState;
// This is currently the only way of properly type the state
export type SliceCreator<Slice> = StateCreator<
  CombinedState,
  [
    ["zustand/devtools", never],
    ["zustand/persist", unknown],
    ["zustand/immer", never]
  ],
  [],
  Slice
>;

// Due to typescript quirks, this has to all be in one giant object for inference
export const useStore = create<CombinedState>()(
  // Allows us to use Redux devtools in the browser
  devtools(
    // Persists the state to the localStorage in the browser
    persist(
      // Wraps Immer around the set function
      immer((...args) => ({
        // Add the slices here
        ...createAuthSlice(...args),
      })),
      // Persist options
      {
        name: STORE_NAME,
        version: STORE_VERSION,
        // We only want to persist certain parts of the state
        partialize: ({ auth }) => ({ auth }),
        // Since we have nested states, we need to deep-merge the objects
        merge: (persistedState, currentState) =>
          merge(currentState, persistedState),
      }
    ),
    // Devtools options
    {
      name: STORE_NAME,
      trace: import.meta.env.DEV,
    }
  )
);
