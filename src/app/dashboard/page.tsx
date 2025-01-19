"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const status = session?.status;
  const router = useRouter();

  return <div>page</div>;
}
