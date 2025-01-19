/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }: any) => {
   return <SessionProvider>{children}</SessionProvider>;
};