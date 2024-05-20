"use client";
import { usePathname } from "next/navigation";
import AccountCards from "../_components/accountCards";
import TransactionsTable from "../_components/transactionsTable";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Accounts = () => {
  const pathname = usePathname();
  return (
    <div className="pt-20 flex flex-row">
      <div className="pr-[6.5rem]">
        <div className="flex flex-row justify-between pb-9">
          <h2 className="text-xl font-medium">Основний Рахунок</h2>
        </div>
        <AccountCards index="0" />
        <div className="flex flex-row justify-between pb-9 pt-10">
          <h2 className="text-xl font-medium">Зарплатний Рахунок</h2>
        </div>
        <AccountCards index="1" />
        <div className="flex flex-row justify-between pb-9 pt-10">
          <h2 className="text-xl font-medium">Пенсійний Рахунок</h2>
        </div>
        <AccountCards index="2" />
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-medium">Транзакції</h2>
          <Link
            href="/dashboard/transactions"
            className="flex flex-row"
            style={{
              color:
                pathname === "/dashboard/transactions" ? "#33B786" : "#555555",
            }}
          >
            <ArrowRight
              width={26}
              height={26}
              className="mt-1 text-custom ml-80"
            />
          </Link>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Accounts;
