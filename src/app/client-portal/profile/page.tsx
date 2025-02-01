"use client";
import React, { useContext } from "react";
import { Tabs, Tab } from "@heroui/react";
import PersonalInfo from "@/components/client-portal/PersonalInfo";
import ChangePassword from "@/components/client-portal/ChangePassword";
import AccountValidation from "@/components/client-portal/AccountValidation";
import { UserContext } from "@/providers/context";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && (
        <Tabs color="primary" variant="bordered" aria-label="Options">
          <Tab key="personal-info" title="Personal Info">
            <PersonalInfo user={user} />
          </Tab>
          <Tab key="change-password" title="Change Password">
            <ChangePassword user={user}  />
          </Tab>
          <Tab key="account-validation" title="Account Validation">
            <AccountValidation />
          </Tab>
        </Tabs>
      )}
    </>
  );
}
