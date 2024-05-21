import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useAlert } from "@/hooks/use-alert";
import { useSalary } from "@/hooks/use-salary";
import { useSuccess } from "@/hooks/use-success";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation, useQuery } from "convex/react";
import { Bebas_Neue } from "next/font/google";
import { useState } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface TransferCardProps {
  index: string;
}

const Transfer: React.FC<TransferCardProps> = ({ index }) => {
  const { user } = useUser();
  const users = useQuery(api.users.getById);
  const salaries = useQuery(api.salary.getById);
  const retirements = useQuery(api.retirement.getById);

  const mutateTransfer = useMutation(api.transactions.createTransfer);
  const updateBalance = useMutation(api.users.updateBalance);
  const updateSalaryBalance = useMutation(api.salary.updateBalance);
  const updateRetirementBalance = useMutation(api.retirement.updateBalance);

  const authenticatedUserEmail = user && user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );
  const authenticatedUserSalary = salaries?.find(
    (salaries) => salaries.email === authenticatedUserEmail
  );
  const authenticatedUserRetirement = retirements?.find(
    (retirements) => retirements.email === authenticatedUserEmail
  );

  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(100);

  const transferUserExists = users?.find((users) => users.card === cardNumber);

  const makeTransfer = () => {
    if (cardNumber === "Зарплата") {
      if (authenticatedUserSalary) {
        const updatedBalance = authenticatedUserSalary.balance + amount;

        updateSalaryBalance({
          id: authenticatedUserSalary._id,
          balance: updatedBalance,
          expence: authenticatedUserSalary.expence,
        });

        salary.onOpen(amount.toString(), cardNumber);
      }
      return;
    }
    if (cardNumber === "Пенсія") {
      if (authenticatedUserRetirement) {
        const updatedBalance = authenticatedUserRetirement.balance + amount;

        updateRetirementBalance({
          id: authenticatedUserRetirement._id,
          balance: updatedBalance,
          expence: authenticatedUserRetirement.expence,
        });

        salary.onOpen(amount.toString(), cardNumber);
      }
      return;
    }
    if (!cardNumber) {
      alert.onOpen("Введіть номер картки.");
    } else if (!transferUserExists) {
      alert.onOpen("Користувача з таким номером картки не існує.");
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
        date: getCurrentDateTime(),
        amount: amount,
        status: "Завершено",
        type: "Переказ",
      });
      updateUsersBalance();
      updateTransferUserBalance();
      success.onOpen(
        amount.toString(),
        authenticatedUser?.card || "",
        cardNumber.toString()
      );
    }
  };

  const updateUsersBalance = () => {
    if (authenticatedUser) {
      if (authenticatedUserSalary) {
        if (authenticatedUserRetirement) {
          if (index === "0") {
            const updatedBalance = authenticatedUser.balance - amount;
            const updatedExpence = authenticatedUser.expence + amount;

            updateBalance({
              id: authenticatedUser._id,
              balance: updatedBalance,
              expence: updatedExpence,
            });
          } else if (index === "1") {
            const updatedBalance = authenticatedUserSalary.balance - amount;
            const updatedExpence = authenticatedUserSalary.expence + amount;

            updateSalaryBalance({
              id: authenticatedUserSalary._id,
              balance: updatedBalance,
              expence: updatedExpence,
            });
          } else if (index === "2") {
            const updatedBalance = authenticatedUserRetirement.balance - amount;
            const updatedExpence = authenticatedUserRetirement.expence + amount;

            updateRetirementBalance({
              id: authenticatedUserRetirement._id,
              balance: updatedBalance,
              expence: updatedExpence,
            });
          }
        }
      }
    }
  };

  const updateTransferUserBalance = () => {
    if (transferUserExists) {
      const updatedBalance = transferUserExists?.balance + amount;
      const updatedExpence = transferUserExists?.expence;

      updateBalance({
        id: transferUserExists._id,
        balance: updatedBalance,
        expence: updatedExpence,
      });
    }
  };

  const getCurrentDateTime = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  let authenticatedUserBalance;

  if (index === "0") {
    authenticatedUserBalance = authenticatedUser?.balance.toLocaleString(
      "en-Us",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );
  } else if (index === "1") {
    authenticatedUserBalance = authenticatedUserSalary?.balance.toLocaleString(
      "en-Us",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );
  } else if (index === "2") {
    authenticatedUserBalance =
      authenticatedUserRetirement?.balance.toLocaleString("en-Us", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }

  const alert = useAlert();
  const success = useSuccess();
  const salary = useSalary();
  return (
    <div className="flex flex-row bg-light rounded-xl pl-10 py-8 w-full">
      <div className="min-w-[12rem] max-w-[12rem]">
        <p className="text-link text-base font-medium">Баланс</p>
        <div className={bebasNeue.className}>
          <h2 className="text-[2rem]">{authenticatedUserBalance} UAH</h2>
        </div>
      </div>
      <div className="pl-8">
        <div>
          <p className="text-link text-base font-medium">На картку</p>
          <div className="flex flex-row">
            <input
              type="tel"
              inputMode="numeric"
              placeholder={"XXXX XXXX XXXX XXXX"}
              className="rounded-lg py-4 pl-4 pr-20 w-full mt-3 text-2xl outline-none"
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
            className="rounded-lg py-4 pl-4 pr-20 w-full mt-3 text-2xl outline-none"
            maxLength={6}
            defaultValue={100}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <Button onClick={makeTransfer} className="mt-2 w-full">
          Продовжити
        </Button>
      </div>
    </div>
  );
};

export default Transfer;
