"use client";
import { changePassword } from "@/actions/change-password";
import { User } from "@/models/user.model";
import { Alert, Button, Input } from "@heroui/react";
import React, { useActionState, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type ChangePasswordProps = {
  user: User;
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function ChangePassword({ user }: ChangePasswordProps) {
  const [state, formAction, pending] = useActionState(
    changePassword,
    initialState
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.success) {
      setError("");
      toast.success(state.message);
    } else if (state.message) {
      setError(state.message);
    }
  }, [state]);

  return (
    <>
      <h3>Change Password</h3>
      <Alert color="primary" className="mt-2">
        Your privacy is a big issue for us we do everything we can to keep your
        information private. For your own safety and privacy we recommend you
        update your trader every three months. Keep it private and confidential.
        Do not share it with anyone including personnel. Remember that this will
        change your trader password to the client area and all your trading
        accounts as well.
      </Alert>
      <form action={formAction}>
        <input type="hidden" name="email" value={user.email} />
        <div className="flex flex-col gap-6 mt-5">
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">
              Current password
            </h3>
            <Input
              label="Current password"
              isRequired
              name="current-password"
              type="password"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">New password</h3>
            <Input
              label="New password"
              isRequired
              name="new-password"
              type="password"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">
              Repeat new password
            </h3>
            <Input
              label="Repeat new password"
              isRequired
              name="repeat-new-password"
              type="password"
            />
          </div>
          {error && <p className="text-center text-red-600 my-5">{error}</p>}
          <div className="flex justify-end">
            <Button
              isLoading={pending}
              type="submit"
              className="min-w-[300px]"
              color="default"
            >
              Change Password
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
