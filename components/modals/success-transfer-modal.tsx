"use client";
import { useSuccess } from "@/hooks/use-success";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export const SuccessModal = () => {
  const success = useSuccess();
  return (
    <AlertDialog open={success.isOpen} onOpenChange={success.onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Дякуємо</AlertDialogTitle>
          <AlertDialogDescription>
            <h2>Платіж успішно проведено!</h2>
            <p>Переказ власних коштів.</p>
            <p>
              <b>{success.amount}</b> UAH
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col">
          <AlertDialogCancel>Продовжити</AlertDialogCancel>
          <AlertDialogAction>Деталі платежу</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
