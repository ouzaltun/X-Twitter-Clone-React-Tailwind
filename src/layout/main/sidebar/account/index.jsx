import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "./more";

function Account() {
  const account = useAccount();
  console.log(account);
  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] transition-colors w-full flex text-left items-center outline-none">
          <img className="h-10 w-10 rounded-full" src={account.avatar} alt="" />
          <div className="mx-3">
            <div className="text-[15px] font-bold">{account.fullName}</div>
            <div className="text-[15px] font-normal text-[#71767b] leading-5">
              @{account.username}
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="ml-auto text-[#e8e9ea]"
            width={18.75}
          >
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
          <div className="items-end">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#fff"
              class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          </div>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-[80px] w-[300px] left-1/2 py-3 -translate-x-1/2 bg-black shadow-box rounded-2xl">
            <More></More>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Account;
