"use client";
import { Alert, Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useEffect } from "react";
import styles from "../../scss/client-portal-profile.module.scss";
import { User } from "@/models/user.model";
import { updateProfile } from "@/actions/update-profile";
import { toast, ToastContainer } from "react-toastify";
import { COUNTRIES } from "@/constants/countries.constant";

type PersonalInfoProps = {
  user: User;
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function PersonalInfo({ user }: PersonalInfoProps) {
  const [state, formAction, pending] = useActionState(
    updateProfile,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <h3>Personal Info</h3>
      <Alert color="primary" className="mt-2">
        Keep your personal data updated! Keep in mind that we use this
        information in order to contact and inform you about your account at all
        times. Please make sure the information is accurate.
      </Alert>
      <form action={formAction}>
        <input type="hidden" name="user-id" value={user.id} />
        <div className="flex flex-col gap-6 mt-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">First Name</h3>
              <Input
                isDisabled
                defaultValue={user.firstName}
                required
                name="firstName"
                type="text"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Last Name</h3>
              <Input
                isDisabled
                defaultValue={user.lastName}
                required
                name="lastName"
                type="text"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Gender</h3>
              <Select defaultSelectedKeys={[user.gender]} className={styles.select} name="gender" label="Gender">
                <SelectItem key="male">Male</SelectItem>
                <SelectItem key="female">Female</SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Language</h3>
              <Select
                defaultSelectedKeys={[user.language]}
                className={styles.select}
                name="language"
                label="Language"
              >
                <SelectItem key="English">English</SelectItem>
                <SelectItem key="French">French</SelectItem>
                <SelectItem key="Italian">Italian</SelectItem>
                <SelectItem key="German">German</SelectItem>
              </Select>
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">
                Identification Number
              </h3>
              <Input defaultValue={user.identificationNumber} name="identification-number" type="text" />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Address</h3>
              <Input defaultValue={user.address} name="address" type="text" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Country</h3>
              <Select
                defaultSelectedKeys={[user.country]}
                className={styles.select}
                name="country"
                label="Country"
              >
                {COUNTRIES.map((country) => (
                    <SelectItem key={country.name}>{country.name}</SelectItem>
                ))}
              
              </Select>
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">City</h3>
              <Input defaultValue={user.city} name="city" type="text" />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">Postal code</h3>
              <Input defaultValue={user.postalCode} name="postal-code" type="text" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">
                Country specific indentifier
              </h3>
              <Input defaultValue={user.countrySpecificID} name="country-specific-identifier" type="text" />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">
                Buyer&apos;s email
              </h3>
              <Input
                isDisabled
                defaultValue={user.email}
                required
                name="email"
                type="text"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-default-500 text-small mb-4">
                Buyer&apos;s phone
              </h3>
              <Input
                isDisabled
                defaultValue={user.phone}
                required
                name="phone"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              isLoading={pending}
              type="submit"
              className="w-full md:w-auto md:min-w-[300px]"
              color="default"
            >
              Update Account
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
