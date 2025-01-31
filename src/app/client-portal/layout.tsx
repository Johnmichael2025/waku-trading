import ClientPortalNavigation from "@/components/ClientPortalNavigation";
import { UserProvider } from "@/providers/UserProvider";

export default function ClientPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientPortalNavigation />
      <UserProvider>
        <div className="md:ml-[270px] md:pt-[150px] p-10">{children}</div>
      </UserProvider>
    </>
  );
}
