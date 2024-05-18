"use client";
import { useTransfer } from "@/hooks/use-transfer";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Bebas_Neue } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const TransferModal = () => {
  const transfer = useTransfer();

  const { user } = useUser();
  const users = useQuery(api.users.getById);

  const authenticatedUserEmail = user && user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );
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
            />
          </div>
          <Button onClick={transfer.onClose} className="mt-2 w-full">
            Продовжити
          </Button>
          <div className="pl-16"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
