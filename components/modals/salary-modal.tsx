"use client";
import { useSalary } from "@/hooks/use-salary";
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

export const SalaryModal = () => {
  const salary = useSalary();

  const handleDownload = () => {
    const doc = new jsPDF();

    if (salary.type === "Зарплата") {
      doc.text("Receipt of payment", 10, 10);
      doc.text("Type: Salary", 10, 20);
      doc.text("From: SomeCompanyInc.", 10, 30);
      doc.text(`Total: ${salary.amount}.00 UAH`, 10, 40);
      doc.text("Thanks for staying with us!", 10, 50);

      const pdfBlob = doc.output("blob");
      saveAs(pdfBlob, "квитанція-про-зарплату.pdf");
    } else if (salary.type === "Пенсія") {
      doc.text("Receipt of payment", 10, 10);
      doc.text("Type: Retirement", 10, 20);
      doc.text("From: Pension Fund of Ukraine", 10, 30);
      doc.text(`Total: ${salary.amount}.00 UAH`, 10, 40);
      doc.text("Thanks for staying with us!", 10, 50);

      const pdfBlob = doc.output("blob");
      saveAs(pdfBlob, "квитанція-про-пенсію.pdf");
    }
  };

  return (
    <AlertDialog open={salary.isOpen} onOpenChange={salary.onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-xl font-bold text-custom">
            {salary.type}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <h2 className="text-center text-base font-bold text-custom">
              Платіж отримано!
            </h2>
            <p className="py-10 text-center text-2xl font-bold text-muted-foreground">
              <b className="text-black">{salary.amount}.00</b> UAH
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
