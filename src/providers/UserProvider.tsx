"use client";
import { axiosInstance } from "@/lib/axios-instance";
import { User } from "@/models/User";
import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./context";


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const session = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const _user = await axiosInstance.get(
          `api/user/${session.data?.user?.email}`
        );
        setUser(_user.data as User);
      } catch (err) {
        console.log("Error fetching user", err);
      }
    };

    if (session.data?.user?.email) {
      fetchUser();
    }
   
  }, [session]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
