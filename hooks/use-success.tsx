import { create } from "zustand";

type SuccessModal = {
  isOpen: boolean;
  onOpen: (amount: string, from: string, to: string) => void;
  onClose: () => void;
  amount: string;
  from: string;
  to: string;
};

export const useSuccess = create<SuccessModal>((set) => ({
  isOpen: false,
  onOpen: (amount: string, from: string, to: string) =>
    set({ isOpen: true, amount: amount, from: from, to: to }),
  onClose: () => set({ isOpen: false }),
  amount: "",
  from: "",
  to: "",
}));
