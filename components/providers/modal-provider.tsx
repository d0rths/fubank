"use client";

import { useEffect, useState } from "react";

import { TransferModal } from "@/components/modals/transfer-modal";
import { AlertModal } from "@/components/modals/alert-modal";
import { SuccessModal } from "../modals/success-transfer-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <TransferModal />
      <AlertModal />
      <SuccessModal />
    </>
  );
};
