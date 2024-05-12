import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Transactions = () => {
  const pathname = usePathname();
  const trans = useQuery(api.transactions.getById);

  return (
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
      <div>
        <table>
          <tbody>
            {trans?.map(({ trans_id, username, type, date, amount }) => (
              <tr key={trans_id}>
                <td>{username}</td>
                <td>{type}</td>
                <td>{date}</td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
