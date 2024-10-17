import { PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DefaultForm, FormPaper } from "shared";

interface ISignInForm {
  username: string;
  password: string;
}

const SignInForm = (props: PropsWithChildren) => {
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
    <DefaultForm<["email", "password", "username"]>
      directionAnimate="left"
      action={async (data) => {
        alert(JSON.stringify(data));
      }}
      inputsProps={[
        {
          required: true,
          label: "Email",
          name: "email",
          registerOption: {
            required: { value: true, message: "This field is required!" },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:
                "You have written incorect email! Correct example: example@gmail.com",
            },
          },
        },
        {
          required: true,
          label: "Password",
          name: "password",
          registerOption: {
            required: { value: true, message: "This field is required!" },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "You have written incorect password! You need to have a minimum of 6 digits, at least 1 must be capitalized and a minimum of 1 digit. Correct example: Password1",
            },
          },
        },
      ]}
    />
  );
};

export default SignInForm;
