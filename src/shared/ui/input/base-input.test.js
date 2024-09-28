import { describe, test, expect, jest, beforeEach } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseInput } from "./base-input";

import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

describe("BaseInput component", () => {
  let component;
  const registerOptions = {
    name: "testName",
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };

  beforeEach(() => {
    component = render(
      <BaseInput
        label="Test Label"
        registerOptions={registerOptions}
        formError={undefined}
      />
    );
  });

  test("... & check with default display", () => {
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  test("... & passes the props correctly to TextField", () => {
    const { container } = component;
    const input = container.querySelector("input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "testName");
  });

  test("... & displays error message when formError is present", async () => {
    const formError = { message: "This is an error message" };
    const { rerender } = component;
    await waitFor(() => {
      rerender(
        <BaseInput
          label="Test Label"
          registerOptions={registerOptions}
          formError={formError}
        />
      );
    });
    const messageComponent = screen.getByTestId("base_input_message");
    expect(messageComponent).toBeInTheDocument();
    expect(messageComponent).toHaveTextContent(formError.message);

    expect(component.container.innerHTML).toMatchSnapshot();
  });

  test("... & handles user input correctly", async () => {
    const input = component.container.querySelector("input");
    await userEvent.type(input, "Hello");

    expect(registerOptions.onChange).toHaveBeenCalledTimes(5);
  });

  test("... & make snapshot", () => {
    expect(component.container.innerHTML).toMatchSnapshot();
  });
});
