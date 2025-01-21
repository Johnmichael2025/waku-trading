import ClientPortalNavigation from "@/components/ClientPortalNavigation";
import { UserProvider } from "@/providers/UserProvider";

export default function ClientPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserProvider>
        <ClientPortalNavigation />
        <div className="md:ml-[270px] md:pt-[150px] p-6">{children}</div>
      </UserProvider>
    </>
  );
}
