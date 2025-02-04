export const isClientPortal = (pathname: string | null) => {
  return pathname?.includes("client-portal");
}

export const isAdminPortal = (pathname: string | null) => {
  return pathname?.includes("admin-portal");
}