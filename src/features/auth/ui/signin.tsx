import { PropsWithChildren, useRef } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { BaseInput, BaseButton, ButtonWithLoader, PasswordInput } from "shared/index";
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

  const onClickPop = async () => {
    await new Promise((res) => {
      setTimeout(() => {
        res("");
      }, 5000);
    });
  };

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

      <PasswordInput
        registerOptions={register("password", {
          required: { value: true, message: "Ganstasheet man..." },
          pattern: { value: /\d+/, message: "Ganstasheet man..." },
        })}
        label="Password"
        formError={errors.username}
        fullWidth
      />
      <ButtonWithLoader progressPosition="end" params={{}} onClick={onClickPop}>
        Hello
      </ButtonWithLoader>
    </form>
  );
};

export default SignInForm;
