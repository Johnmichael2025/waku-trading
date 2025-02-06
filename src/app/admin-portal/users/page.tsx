import Users from "@/components/admin-portal/Users";
import { User } from "@/models/user.model";
import React from "react";

const getUsers = async () => {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL, 'base url')
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`
  );
  return await res.json();
};
export default async function page() {
  const users = (await getUsers()) as User[];

  return (
    <Users users={users} />
  );
}
