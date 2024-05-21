import { create } from "zustand";

type SalaryModal = {
  isOpen: boolean;
  onOpen: (amount: string, type: string) => void;
  onClose: () => void;
  amount: string;
  type: string;
};

export const useSalary = create<SalaryModal>((set) => ({
  isOpen: false,
  onOpen: (amount: string, type: string) =>
    set({ isOpen: true, amount: amount, type: type }),
  onClose: () => set({ isOpen: false }),
  amount: "",
  type: "",
}));
