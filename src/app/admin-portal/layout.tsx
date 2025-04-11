import SidebarNavigation from "@/components/SidebarNavigation";
import { ADMIN_PORTAL_NAVIGATION } from "@/constants/admin-portal-navigation.constant";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';
export default function AdminPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarNavigation navLinks={ADMIN_PORTAL_NAVIGATION} />
      <Suspense>
        <div className="md:ml-[270px] p-10">{children}</div>
      </Suspense>
    </>
  );
}
