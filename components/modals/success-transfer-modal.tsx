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
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const SuccessModal = () => {
  const success = useSuccess();

  const users = useQuery(api.users.getById);
  const userFrom = users?.find((users) => users.card === success.from);
  const userTo = users?.find((users) => users.card === success.to);

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text("Payment receipt", 10, 10);
    doc.text(`From: ${userFrom?.username}`, 10, 20);
    doc.text(`To: ${userTo?.username}`, 10, 30);
    doc.text(`Total: ${success.amount}.00 UAH`, 10, 40);
    doc.text("Thank you for your payment!", 10, 50);

    const pdfBlob = doc.output("blob");
    saveAs(pdfBlob, "квитанція.pdf");
  };

  return (
    <AlertDialog open={success.isOpen} onOpenChange={success.onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-xl font-bold text-custom">
            Дякуємо
          </AlertDialogTitle>
          <AlertDialogDescription>
            <h2 className="text-center text-base font-bold text-custom">
              Платіж успішно проведено!
            </h2>
            <p className="text-center text-base text-muted-foreground">
              Переказ власних коштів.
            </p>
            <p className="py-10 text-center text-2xl font-bold text-muted-foreground">
              <b className="text-black">{success.amount}.00</b> UAH
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col">
          <AlertDialogCancel>Продовжити</AlertDialogCancel>
          <AlertDialogAction onClick={handleDownload}>
            Деталі платежу
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
