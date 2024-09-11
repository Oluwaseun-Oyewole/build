import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface InitialState {
  open: boolean;
  toggle: (open: boolean) => void;
}

export const useGlobalStore = create(
  immer<InitialState>((set) => ({
    open: false,
    toggle(open) {
      set((state) => {
        state.open = open;
      });
    },
  })),
);
