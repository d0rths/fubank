"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EyeCrossed from "@/public/eye-crossed.svg";
import Eye from "@/public/eye.svg";
import Image from "next/image";
import TransactionsTable from "../_components/transactionsTable";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Transactions = () => {
  const pathname = usePathname();
  return (
    <div className="pt-20">
      <div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
