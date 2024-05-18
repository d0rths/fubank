import { usePathname } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

const TransactionsTable = () => {
  const pathname = usePathname();
  const trans = useQuery(api.transactions.getById);
  const users = useQuery(api.users.getById);
  const { user } = useUser();

  const authenticatedUserEmail = user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );
  const authenticatedUserTransactions = trans?.filter(
    (trans) =>
      trans.from === authenticatedUser?.card ||
      trans.to === authenticatedUser?.card
  );

  const fourthColumnClass =
    pathname === "/dashboard" || pathname === "/dashboard/profile"
      ? "text-right"
      : "text-left";
  const shouldShowSecondColumn =
    pathname !== "/dashboard" && pathname !== "/dashboard/profile";
  const tableHeight = pathname === "/dashboard" ? "h-[41rem]" : "h-[31rem]";

  return (
    <div className={`${tableHeight} p-2 overflow-auto`}>
      <div>
        <table className="w-full mt-4">
          <tbody>
            {authenticatedUserTransactions
              ?.slice()
              .reverse()
              .map(({ username, type, date, amount, status, from, to }) => (
                <tr className="h-16 border-b-2 text-base font-medium text-muted-foreground">
                  <td>{username}</td>
                  {shouldShowSecondColumn && <td>{type}</td>}
                  <td>{date}</td>
                  <td className={`text-2xl ${fourthColumnClass}`}>
                    <span
                      style={{
                        color:
                          authenticatedUser?.card === from
                            ? "red"
                            : authenticatedUser?.card === to
                              ? "green"
                              : "black",
                        fontFamily: "Bebas Neue, Arial, sans-serif",
                      }}
                    >
                      {authenticatedUser?.card === from ? "-" : "+"}
                      {amount}
                    </span>
                  </td>
                  {shouldShowSecondColumn && (
                    <td className="flex justify-center pt-3">
                      <div className="text-center text-white bg-custom w-5/6 py-2 rounded-lg">
                        {status}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;