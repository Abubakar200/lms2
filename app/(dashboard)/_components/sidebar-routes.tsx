"use client";

import { Layout, Compass, List, BarChart } from "lucide-react";
import SidebarItems from "./sidebar-items";
import { usePathname } from "next/navigation";
import { gunzipSync } from "zlib";

const guestRoute = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const teacherRoute = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];
const SidebarRoutes = () => {
  const pathName = usePathname();
  const isTeacherpage = pathName?.includes('/teacher')

  const routes = isTeacherpage ? teacherRoute: guestRoute;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
