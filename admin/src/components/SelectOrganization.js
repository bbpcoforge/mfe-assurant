import React from "react";
import Typography from "@mui/material/Typography";
import CustomSelect from "./CustomSelect";
import {
  useGetOrganizationsQuery,
  useGetOrganizationsByParantIdQuery,
} from "../services/organizations";

export default ({ name, selectedValue, handleInputChange, userDetails }) => {
  const { data, error, isLoading } =
    userDetails && userDetails.organization
      ? useGetOrganizationsByParantIdQuery(userDetails.organization)
      : useGetOrganizationsQuery;
  if (isLoading || error || data?.length === 0) {
    return (
      <Typography variant="subtitle1">
        {userDetails?.organizationDescription}
      </Typography>
    );
  }
  return (
    <CustomSelect
      selectedValue={selectedValue}
      name={name}
      lable="organization"
      handleInputChange={handleInputChange}
      data={{
        valueSelecter: "id",
        textSelector: "description",
        obj: [
          {
            id: userDetails.organization,
            description: userDetails?.organizationDescription,
          },
          ...data,
        ],
      }}
    />
  );
};
