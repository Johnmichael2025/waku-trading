import { Button, Input, Select, SelectItem } from "@heroui/react";
import React from "react";
import styles from "../../scss/client-portal-profile.module.scss";
import { User } from "@/models/user.model";

type PersonalInfoProps = {
  user: User;
};
export default function PersonalInfo({ user }: PersonalInfoProps) {
  console.log(user, "user");
  return (
    <>
      <h3>Personal Info</h3>
      <p className="text-small w-[90%]">
        Keep your personal data updated! Keep in mind that we use this
        information in order to contact and inform you about your account at all
        times. Please make sure the information is accurate.
      </p>
      <div className="flex flex-col gap-6 mt-5">
        <div className="flex flex-row gap-5">
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">First Name</h3>
            <Input
              disabled
              value={user.firstName}
              required
              name="firstName"
              type="text"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Last Name</h3>
            <Input
              disabled
              value={user.lastName}
              required
              name="lastName"
              type="text"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Gender</h3>
            <Select className={styles.select} name="gender" label="Gender">
              <SelectItem key="male">Male</SelectItem>
              <SelectItem key="female">Female</SelectItem>
            </Select>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Language</h3>
            <Select
              defaultSelectedKeys={["english"]}
              className={styles.select}
              name="language"
              label="Language"
            >
              <SelectItem key="english">English</SelectItem>
              <SelectItem key="french">French</SelectItem>
              <SelectItem key="italian">Italian</SelectItem>
              <SelectItem key="german">German</SelectItem>
            </Select>
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">
              Identification Number
            </h3>
            <Input required name="identification-number" type="text" />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Address</h3>
            <Input required name="address" type="text" />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Country</h3>
            <Select
              isDisabled
              defaultSelectedKeys={["PH"]}
              className={styles.select}
              name="country"
              label="Country"
            >
              <SelectItem key="PH">Philippines</SelectItem>
            </Select>
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">City</h3>
            <Input required name="city" type="text" />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">Postal code</h3>
            <Input required name="postal-code" type="text" />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">
              Country specific indentifier
            </h3>
            <Input required name="country-specific-identifier" type="text" />
          </div>
          <div className="flex-1">
            <h3 className="text-default-500 text-small mb-4">
              Buyer&apos;s email
            </h3>
            <Input
              isDisabled
              value={user.email}
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
              value={user.phone}
              required
              name="phone"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="min-w-[300px]" color="default">
            Update Account
          </Button>
        </div>
      </div>
    </>
  );
}
