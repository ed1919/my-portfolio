import { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  InputAdornment,
  TextField,
  TextareaAutosize,
  Button,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Theme from "theme";

interface IContactFormProps {}

interface IContactForm {
  name: string;
  email: string;
  description: string;
}

const ContactForm: FC<IContactFormProps> = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IContactForm>();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    alert(`form data ${data.description}`);
    console.log("data", data);
  };

  return (
    <ContainerBox>
      <TitleBox>Contact Form</TitleBox>
      <form
        style={{
          width: 300,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextFieldBox>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormTextField
                {...field}
                label="Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors.name && <ErrorTypography>Name is required</ErrorTypography>}
        </TextFieldBox>
        <TextFieldBox>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: emailRegex }}
            render={({ field }) => (
              <FormTextField
                {...field}
                label="email"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors.email?.type === "required" && (
            <ErrorTypography>Email is required</ErrorTypography>
          )}
          {errors.email?.type === "pattern" && (
            <ErrorTypography>Email format is not correct</ErrorTypography>
          )}
        </TextFieldBox>
        <DescriptionBox>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextareaAutosize
                {...field}
                aria-label="message"
                placeholder="Message:"
                style={{
                  width: "100%",
                  height: 160,
                  resize: "vertical",
                }}
              />
            )}
          />
          {errors.description && (
            <ErrorTypography>description is required</ErrorTypography>
          )}
        </DescriptionBox>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", height: 24 }}
        >
          Submit
        </Button>
      </form>
    </ContainerBox>
  );
};

export default ContactForm;

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const TitleBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

const TextFieldBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  width: "100%",
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

const DescriptionBox = styled(Box)(({ theme }) => ({}));

const ErrorTypography = styled(Typography)(({ theme }) => ({
  color: Theme.colors.red,
  fontSize: 12,
}));
