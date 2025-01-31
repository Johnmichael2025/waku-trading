import { Button, Input } from "@heroui/react";
import React from "react";

export default function ChangePassword() {
  return (
    <>
      <h3>Change Password</h3>
      <p className="text-small w-[90%]">
        Your privacy is a big issue for us we do everything we can to keep your information 
        private. For your own safety and privacy we recommend you update your trader every three months. 
        Keep it private and confidential. Do not share it with anyone including personnel. 
        Remember that this will change your trader password to the client area and all your trading accounts as well.
      </p>
      <div className="flex flex-col gap-6 mt-5">
        <div className="flex-1">
          <h3 className="text-default-500 text-small mb-4">Current password</h3>
          <Input
            required
            name="current-password"
            type="password"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-default-500 text-small mb-4">New password</h3>
          <Input
            disabled
            required
            name="new-password"
            type="password"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-default-500 text-small mb-4">Repeat new password</h3>
          <Input
            disabled
            required
            name="repeat-new-password"
            type="password"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="min-w-[300px]" color="default">
            Change Password
          </Button>
        </div>
      </div>
    </>
  );
}
