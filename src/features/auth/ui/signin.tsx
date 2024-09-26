import { PropsWithChildren, useRef } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { BaseInput } from "shared/index";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface ISignInForm {
  username: string;
  password: string;
}

const SignInForm = (props: PropsWithChildren) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: { username: "defaultValue", password: "" },
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      className="w-[100vw] px-[20px] py-0 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <BaseInput<"username">
        registerOptions={register("username", {
          required: { value: true, message: "Ganstasheet man..." },
          pattern: { value: /\d+/, message: "Ganstasheet man..." },
        })}
        label="Email"
        formError={errors.username}
        fullWidth
      />

      <BaseInput<"password">
        registerOptions={register("password", {
          required: { value: true, message: "Ganstasheet man..." },
          pattern: { value: /\d+/, message: "Ganstasheet man..." },
        })}
        label="Password"
        formError={errors.username}
        fullWidth
        type="password"
      />
      <input {...register("password", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default SignInForm;
