import Users from "@/components/admin-portal/Users";
import prisma from "@/lib/prisma";
import { User } from "@/models/user.model";
import React from "react";

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users as unknown as User[];
  } catch (err) {
    console.log(err, 'err');
    return [];
  }
};
export default async function page() {
  const users = await getUsers();

  return (
    <Users users={users} />
  );
}
