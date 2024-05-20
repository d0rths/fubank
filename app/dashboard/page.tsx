"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IconLogo from "@/public/Icon_logo.svg";
import { ArrowRight, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import TransactionsTable from "./_components/transactionsTable";
import TransferCard from "./_components/transferCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useTransfer } from "@/hooks/use-transfer";
import AccountCards from "./_components/accountCards";
import { AccountsCombobox } from "@/components/modals/accounts-combobox";

const DashboardPage = () => {
  const users = useQuery(api.users.getById);

  const [loading, setLoading] = useState(true);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState("0");

  useEffect(() => {
    if (users) {
      setLoading(false);
    }
  }, [users]);

  const pathname = usePathname();

  const transfer = useTransfer();

  const handleAccountSelect = (value: string) => {
    setSelectedAccountIndex(value);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light z-50">
        <div className="loader">
          <Image src={IconLogo} alt="Loading" width={100} height={100} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row pt-20">
      <div className="pr-[6.5rem]">
        <div>
          <div className="flex flex-row justify-between pb-5">
            <h2 className="text-2xl font-medium">Баланс Поточного Рахунку</h2>
            <AccountsCombobox onSelect={handleAccountSelect} />
          </div>
          <AccountCards index={selectedAccountIndex} />
        </div>
        <div>
          <div className="flex flex-row justify-between pb-5 pt-16">
            <h2 className="text-2xl font-medium">Переказ</h2>
            <Button
              onClick={transfer.onOpen}
              className="bg-customGray py-6 hover:bg-[#d3d2d2]"
            >
              <Plus width={16} height={16} className="text-inactive" />
            </Button>
          </div>
          <div>
            <TransferCard />
          </div>
        </div>
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

export default DashboardPage;
