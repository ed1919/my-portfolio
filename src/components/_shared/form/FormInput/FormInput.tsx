import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

import Theme from "theme";

interface IFormInputProps {
  name: string;
  control: any;
  rules: any;
  defaultValue?: string;
  errors?: any;
}

const FormInput: FC<IFormInputProps> = ({
  name,
  control,
  rules,
  defaultValue = "",
  errors,
}) => {
  return (
    <TextFieldBox>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <FormTextField {...field} label={name} color="secondary" />
        )}
      />
      {errors[name]?.type === "required" && (
        <ErrorTypography>{name} is required</ErrorTypography>
      )}
      {errors[name]?.type === "pattern" && (
        <ErrorTypography>{name} pattern is not valid</ErrorTypography>
      )}
    </TextFieldBox>
  );
};

export default FormInput;

const TextFieldBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  width: "100%",
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

const ErrorTypography = styled(Typography)(({ theme }) => ({
  color: Theme.colors.red,
  fontSize: 12,
}));
