import { PropsWithChildren, useRef } from "react";
import { BaseInput, BaseButton, PasswordInput } from "shared/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormPaper } from "./form-paper";

interface ISignInForm {
  username: string;
  password: string;
}

const RegistrationForm = (props: PropsWithChildren) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: { username: "", password: "" },
  });

  const onClickPop = async () => {
    await new Promise((res) => {
      setTimeout(() => {
        res("");
      }, 5000);
    });
  };

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    reset();
  };

  return (
    <FormPaper>
      <form
        className="w-[100vw] h-full px-[20px] py-0 mt-5 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BaseInput<"username">
          registerOptions={register("username", {
            required: { value: true, message: "This field is required!" },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:
                "You have written incorect email! Correct example: example@gmail.com",
            },
          })}
          label="Email"
          formError={errors.username}
          fullWidth
        />

        <PasswordInput
          registerOptions={register("password", {
            required: { value: true, message: "This field is required!" },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "You have written incorect password! You need to have a minimum of 6 digits, at least 1 must be capitalized and a minimum of 1 digit. Correct example: Password1",
            },
          })}
          label="Password"
          formError={errors.password}
          fullWidth
        />
        <BaseButton type="submit">Submit</BaseButton>
      </form>
    </FormPaper>
  );
};

export default RegistrationForm;
