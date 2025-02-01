import ClientPortalNavigation from "@/components/ClientPortalNavigation";
import { UserProvider } from "@/providers/UserProvider";
import { Suspense } from "react";

export default function ClientPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientPortalNavigation />
      <UserProvider>
        <Suspense>
          <div className="md:ml-[270px] md:pt-[150px] p-10">{children}</div>
        </Suspense>
      </UserProvider>
    </>
  );
}
