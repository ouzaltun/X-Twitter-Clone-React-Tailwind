import classNames from "classnames";
import React from "react";
import { useAccount, useAccounts } from "~/store/auth/hooks";

function More() {
  const accounts = useAccounts();
  const currentAccount = useAccount();
  console.log(accounts);
  return (
    <div>
      {accounts.map((account) => (
        <button
          className={classNames(
            "py-3 px-4 flex items-center text-left w-full transition-colors",
            {
              "hover:bg-[#eff3f41a]": currentAccount.id !== account.id,
            }
          )}
        >
          <img className="h-10 w-10 rounded-full" src={account.avatar} alt="" />
          <div className="mx-3 flex-1">
            <div className="text-[15px] font-bold">{account.fullName}</div>
            <div className="text-[15px] font-normal text-[#71767b] leading-5">
              @{account.username}
            </div>
          </div>

          {currentAccount.id === account.id && (
            <svg
              viewBox="0 0 24 24"
              className="mr-2 ml-3"
              width={18.75}
              height={18.75}
              fill="#00ba7c"
            >
              <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
            </svg>
          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3"></div>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[15px] leading-[15px]">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[15px] leading-[15px]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[15px] leading-[15px]">
        <div className="max-w-[228px]">
          @{currentAccount.username} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
}

export default More;
