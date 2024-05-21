"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { usePathname } from "next/navigation";
import { ArrowRight, Expand, Plus } from "lucide-react";
import TransactionsTable from "../_components/transactionsTable";
import { SetStateAction, useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Profile = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const users = useQuery(api.users.getById);

  const updateUserPhone = useMutation(api.users.updateUserPhone);
  const updateUsername = useMutation(api.users.updateUsername);
  const [usernameChanged, setUsernameChanged] = useState(false);
  const [phoneNumberChanged, setPhoneNumberChanged] = useState(false);

  const authenticatedUserEmail = user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasLetters, setHasLetters] = useState(false);

  const handleInputUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserName(e.target.value);
    setUsernameChanged(true);
  };
  const handleInputPhoneChange = (e: {
    target: { value: SetStateAction<any> };
  }) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
      setHasLetters(false);
      setPhoneNumberChanged(true);
    } else {
      setHasLetters(true);
    }
  };

  const handleSaveButtonClick = () => {
    if (authenticatedUserEmail) {
      if (!users) return;

      const authenticatedUser = users.find(
        (user) => user.email === authenticatedUserEmail
      );

      if (authenticatedUser) {
        if (usernameChanged) {
          updateUsername({
            id: authenticatedUser._id,
            username: userName,
          });
        }

        if (phoneNumberChanged) {
          updateUserPhone({
            id: authenticatedUser._id,
            phone: phoneNumber,
          });
        }
      }
    }
  };

  const formattedBalance = authenticatedUser?.balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="pt-12 flex flex-row justify-between">
      <div className="flex flex-col items-center bg-white w-[44.5rem] rounded-xl mr-[6.5rem]">
        <img
          src={user && user.picture ? user.picture : undefined}
          alt="Avatar"
          className="mt-10 w-[160px] h-[160px] rounded-full"
        />
        <input
          type="tel"
          placeholder={""}
          className="rounded-lg text-center py-5 w-2/3 mt-3 text-[2rem] font-bold outline-none"
          defaultValue={authenticatedUser?.username}
          onChange={handleInputUsernameChange}
          maxLength={30}
        />
        <div className="pt-12 w-1/2">
          <p className="text-base font-medium text-custom">Пошта</p>
          <h2 className="text-2xl font-bold pb-5">{user && user.email}</h2>
          <hr></hr>
        </div>
        <div className="pt-5 w-1/2">
          <p className="text-base font-medium text-custom">Номер Телефону</p>
          <input
            type="tel"
            placeholder={"Введіть ваш номер телефону"}
            className={`rounded-lg py-5 w-full mt-3 text-2xl font-bold outline-none ${hasLetters ? "bg-red-100" : ""}`}
            defaultValue={authenticatedUser?.phone}
            onChange={handleInputPhoneChange}
            maxLength={10}
          />
          <hr></hr>
        </div>
        <button
          className="w-1/2 rounded-lg text-2xl py-4 mt-7 mb-10 text-muted-foreground bg-customGray hover:bg-[#d3d2d2]"
          onClick={handleSaveButtonClick}
        >
          Зберегти
        </button>
      </div>
      <div>
        <div>
          <div className="bg-light rounded-xl px-8 py-8 w-[29.25rem]">
            <div className="flex flex-row justify-between">
              <p className="text-link text-base font-medium">Основний Баланс</p>
              <Link href="/dashboard/accounts" className="pt-1">
                <Expand width={18} height={18} className="text-custom" />
              </Link>
            </div>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">{formattedBalance} UAH</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-16">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl font-medium">Транзакції</h2>
              <Link
                href="/dashboard/transactions"
                className="flex flex-row"
                style={{
                  color:
                    pathname === "/dashboard/transactions"
                      ? "#33B786"
                      : "#555555",
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
      </div>
    </div>
  );
};

export default Profile;
