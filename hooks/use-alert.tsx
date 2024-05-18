import { create } from "zustand";

type AlertModal = {
  isOpen: boolean;
  onOpen: (message: string) => void;
  onClose: () => void;
  message: string;
};

export const useAlert = create<AlertModal>((set) => ({
  isOpen: false,
  onOpen: (message: string) => set({ isOpen: true, message: message }),
  onClose: () => set({ isOpen: false }),
  message: "",
}));
