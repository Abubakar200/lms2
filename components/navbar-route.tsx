"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { issTeacher } from "@/lib/teacher"; 

const NavbarRoutes = () => {
  const pathName = usePathname();
  const {userId}  = useAuth()
  const isTeacher = pathName?.startsWith("/teacher");
  const isPlayer = pathName?.includes("/courses");
  const isSearch = pathName === "/search";
  return (
    <>
    {isSearch && (
      <div className="hidden md:block" >
        <SearchInput />
      </div>
    )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacher || isPlayer ? (
          <Link href="/">
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : issTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button variant="ghost" size="sm">
              Teacher Mode
            </Button>
          </Link>
        ): null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
