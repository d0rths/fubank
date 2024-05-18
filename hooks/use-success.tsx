import { create } from "zustand";

type SuccessModal = {
  isOpen: boolean;
  onOpen: (amount: string) => void;
  onClose: () => void;
  amount: string;
};

export const useSuccess = create<SuccessModal>((set) => ({
  isOpen: false,
  onOpen: (amount: string) => set({ isOpen: true, amount: amount }),
  onClose: () => set({ isOpen: false }),
  amount: "",
}));
