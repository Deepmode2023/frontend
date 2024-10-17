import { useState } from "react";
import {
  RegisterOptions,
  FieldValues,
  FieldError,
  UseFormRegisterReturn,
  Path,
} from "react-hook-form";
import { BaseInputWithMotion, PasswordInputWithMotion } from "shared";
import { useForm } from "react-hook-form";
import { StandardTextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type FormInputType = StandardTextFieldProps & {
  name: string;
  registerOption: RegisterOptions;
  label: string;
};

export type UseFormHookPropsType<IFormState extends FieldValues> = {
  inputsProps: FormInputType[];
  action: (data: FieldValues) => Promise<void>;
  childrenVariants: Record<string, any>;
};

export function useFormHook<IFormState extends FieldValues>({
  inputsProps,
  action,
  childrenVariants,
}: UseFormHookPropsType<IFormState>) {
  const [sumbitErrorMessage, setSumbitErrorMessage] = useState<string | null>(
    null
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormState>();

  const inputs = inputsProps.map(
    ({ name, registerOption, label, required, ...inputProps }) => {
      if (name === "password") {
        return (
          <PasswordInputWithMotion
            variants={childrenVariants}
            key={label}
            {...inputProps}
            label={label}
            registerOptions={
              register(name as Path<IFormState>, {
                ...registerOption,
                deps: registerOption.deps as
                  | Path<IFormState>
                  | Path<IFormState>[],
              }) as UseFormRegisterReturn<"password">
            }
            formError={errors[name] as FieldError | undefined}
          />
        );
      }
      return (
        <BaseInputWithMotion
          variants={childrenVariants}
          key={label}
          {...inputProps}
          label={label}
          registerOptions={
            register(name as Path<IFormState>, {
              ...registerOption,
              deps: registerOption.deps as
                | Path<IFormState>
                | Path<IFormState>[],
            }) as UseFormRegisterReturn<string>
          }
          formError={errors[name] as FieldError | undefined}
        />
      );
    }
  );

  const onResponseHandler = async (data: IFormState) => {
    try {
      const result = await action(data);
      console.log("Action was successful:", result);
    } catch (error) {
      /* @ts-ignore */
      const errorMessage = error?.message
        ? /* @ts-ignore */
          error.message
        : "Action failed in form";
      setSumbitErrorMessage(errorMessage);
      console.error("Action failed:", errorMessage);
      setTimeout(() => {
        setSumbitErrorMessage(null);
      }, 5000);
    } finally {
      reset();
    }
  };

  return {
    inputs,
    onSubmit: handleSubmit(onResponseHandler),
    submitError: (
      <Typography color="error" variant="subtitle2">
        {sumbitErrorMessage}
      </Typography>
    ),
  };
}
