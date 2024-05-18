"use client";
import { useTransfer } from "@/hooks/use-transfer";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Bebas_Neue } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useAlert } from "@/hooks/use-alert";
import { useState } from "react";
import { useSuccess } from "@/hooks/use-success";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const TransferModal = () => {
  const transfer = useTransfer();
  const alert = useAlert();
  const success = useSuccess();

  const { user } = useUser();
  const users = useQuery(api.users.getById);

  const mutateTransfer = useMutation(api.transactions.createTransfer);
  const updateBalance = useMutation(api.users.updateBalance);

  const authenticatedUserEmail = user && user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );

  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(100);

  const transferUser = users?.find((users) => users.card === cardNumber);

  const makeTransfer = () => {
    if (!cardNumber) {
      alert.onOpen("Введіть номер картки.");
    } else if (
      authenticatedUser?.balance &&
      amount > authenticatedUser.balance
    ) {
      alert.onOpen("Недостатньо коштів на рахунку.");
    } else if (cardNumber === authenticatedUser?.card) {
      alert.onOpen("Неможливо зробити переказ.");
    } else {
      mutateTransfer({
        email: user?.email || "",
        username: authenticatedUser?.username || "",
        from: authenticatedUser?.card || "",
        to: cardNumber,
        date: getCurrentDate(),
        amount: amount,
        status: "Завершено",
        type: "Переказ",
      });
      updateUsersBalance();
      updateTransferUserBalance();
      transfer.onClose();
      success.onOpen(
        amount.toString(),
        authenticatedUser?.card || "",
        cardNumber.toString()
      );
    }
  };

  const updateUsersBalance = () => {
    if (authenticatedUser) {
      const updatedBalance = authenticatedUser?.balance - amount;
      const updatedIncome = authenticatedUser?.income;
      const updatedExpence = authenticatedUser?.expence + amount;

      updateBalance({
        id: authenticatedUser._id,
        balance: updatedBalance,
        income: updatedIncome,
        expence: updatedExpence,
      });
    }
  };

  const updateTransferUserBalance = () => {
    if (transferUser) {
      const updatedBalance = transferUser?.balance + amount;
      const updatedIncome = transferUser?.income + amount;
      const updatedExpence = transferUser?.expence;

      updateBalance({
        id: transferUser._id,
        balance: updatedBalance,
        income: updatedIncome,
        expence: updatedExpence,
      });
    }
  };

  const getCurrentDate = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const authenticatedUserBalance = authenticatedUser?.balance.toLocaleString(
    "en-Us",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
  return (
    <Dialog open={transfer.isOpen} onOpenChange={transfer.onClose}>
      <DialogContent className="bg-light">
        <DialogHeader>
          <DialogTitle>Переказ коштів</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col rounded-xl w-full">
          <div>
            <p className="text-link text-base font-medium">Баланс</p>
            <div className={bebasNeue.className}>
              <h2 className="text-2xl">{authenticatedUserBalance} UAH</h2>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-link text-base font-medium">На картку</p>
            <div className="flex flex-row">
              <input
                type="tel"
                inputMode="numeric"
                placeholder={"XXXX XXXX XXXX XXXX"}
                className={cn(
                  "rounded-lg py-4 pl-4 pr-20 w-full mt-3 text-xl outline-none",
                  bebasNeue.className
                )}
                maxLength={16}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="py-5">
            <p className="text-link text-base font-medium">Сума</p>
            <input
              type="tel"
              inputMode="numeric"
              placeholder={""}
              className={cn(
                "rounded-lg py-4 pl-4 pr-20 w-full mt-3 text-xl outline-none",
                bebasNeue.className
              )}
              maxLength={6}
              defaultValue={100}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <Button onClick={makeTransfer} className="mt-2 w-full">
            Продовжити
          </Button>
          <div className="pl-16"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
