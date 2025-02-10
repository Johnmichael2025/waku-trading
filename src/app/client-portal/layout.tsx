import ClientPortalNavigation from "@/components/SidebarNavigation";
import { CLIENT_PORTAL_NAVIGATION } from "@/constants/client-portal-navigation.constant";
import { UserProvider } from "@/providers/UserProvider";
import { Suspense } from "react";

export default function ClientPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientPortalNavigation navLinks={CLIENT_PORTAL_NAVIGATION} />
      <UserProvider>
        <Suspense>
          <div className="md:ml-[270px] md:pt-[150px] p-5 md:p-10">{children}</div>
        </Suspense>
      </UserProvider>
    </>
  );
}
