/* eslint-disable */

import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { FaAddressBook, FaCommentAlt, FaDocker } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { IoBackspace, IoMenuOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { PiCodeFill } from "react-icons/pi";
import { GoIssueOpened } from "react-icons/go";

interface IMenuItem {
  path: string;
  name: string;
  icon: ReactElement<IconType>;
}

export function Menu({ setToggle, toggle }: { setToggle: React.Dispatch<React.SetStateAction<boolean>>; toggle: boolean }) {
  const location = useLocation();
  const path = location.pathname;

  const MenuItems: IMenuItem[] = [
    {
      path: "/container",
      name: "container",
      icon: <FaDocker />,
    },
    {
      path: "/admin",
      name: "admin",
      icon: <RiAdminFill />,
    },
    {
      path: "/member",
      name: "member",
      icon: <FaAddressBook />,
    },
    {
      path: "/comment",
      name: "comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/editor",
      name: "editor",
      icon: <PiCodeFill />,
    },
    {
      path: "/issue",
      name: "issue",
      icon: <GoIssueOpened />,
    },
  ];
  return (
    <>
      {/** 사이드 바 */}
      <div className={`flex flex-col lg:shadow-md lg:bg-white lg:gap-10 lg:justify-between lg:p-5 lg:w-80 sm:w-full sm:fixed sm:top-0 sm:left-0 sm:right-0 `}>
        {/** 사이드 바 타이틀 영역 */}
        <div className={`flex lg:flex-col lg:justify-center lg:items-center lg:text-gray-700 sm:justify-between sm:px-2 sm:bg-gray-50 sm:h-16 sm:shadow-md sm:z-10`}>
          <img src={`/logo-d.png`} className={`object-contain lg:w-44 sm:w-10`} />
          <div className={`lg:pt-3 sm:flex sm:flex-col sm:justify-center sm:items-center`}>
            <p className={`lg:text-2xl sm:text-lg tracking-[0.4rem] uppercase font-bold`}>foopery</p>
            <p className={`sm:text-sm text-gray-300 tracking-[0.1rem]`}>Management App</p>
          </div>
          <div className={`lg:hidden sm:flex sm:items-center`}>
            {toggle ? (
              <IoBackspace className={`transition duration-300 text-3xl text-gray-700 sm:active:text-gray-400 `} onClick={() => setToggle(!toggle)} />
            ) : (
              <IoMenuOutline className={`transition duration-300 text-3xl text-gray-700 sm:active:text-gray-400 `} onClick={() => setToggle(!toggle)} />
            )}
          </div>
        </div>
        {/** 메뉴 영역 */}
        {/** 메뉴 토글 ON : 임시로 Gray => White 변경 */}
        <div className={`flex flex-col lg:h-full sm:bg-white sm:h-screen ${toggle ? "" : "sm:hidden"}`}>
          {MenuItems.map((menu, idx) => (
            <Link
              to={menu.path}
              key={idx}
              className={`flex text-sm transition duration-400 cursor-pointer items-center uppercase tracking-[0.06rem] lg:rounded-md lg:gap-3 lg:py-3 lg:px-6 lg:hover:bg-gray-50
                         sm:gap-2 sm:py-5 sm:px-4 sm:font-semibold sm:active:bg-gray-100 
                 ${menu.path === path ? "lg:text-blue-500" : "lg:text-gray-700"}`}
            >
              {menu.icon}
              {menu.name}
            </Link>
          ))}
        </div>

        <div className={`lg:flex lg:gap-3 lg:justify-center lg:pb-3 sm:hidden`}>
          <div
            className={`lg:p-3 lg:bg-gray-50 lg:hover:bg-gray-100 lg:rounded-full lg:shadow lg:cursor-pointer lg:text-gray-700 lg:hover:text-gray-700 lg:transition lg:duration-400`}
          >
            <MdNightlight />
          </div>
          {/** 로그아웃시 토큰삭제 */}
          <div
            className={`lg:p-3 lg:bg-gray-50 lg:hover:bg-gray-100 lg:rounded-full lg:shadow lg:cursor-pointer lg:text-gray-700 lg:hover:text-gray-700 lg:transition lg:duration-400`}
          >
            <LuLogOut />
          </div>
        </div>
      </div>
    </>
  );
}
