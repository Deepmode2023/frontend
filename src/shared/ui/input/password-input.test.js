import { describe, test, expect, beforeEach, jest } from "bun:test";
import { PasswordInput } from "./password-input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

describe("Testing 'PasswordInput' component", () => {
  let component;
  const registerOptions = {
    name: "testName",
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };
  beforeEach(() => {
    component = render(
      <PasswordInput
        {...registerOptions}
        label="Test Label"
        formError={undefined}
      />
    );
  });

  test("... & icon click event", async () => {
    const input = component.container.querySelector("input");
    const iconButton = screen.getByTestId("password_input_icon");

    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
    await userEvent.click(iconButton);
    expect(input).toHaveAttribute("type", "text");
    await userEvent.click(iconButton);
    expect(input).toHaveAttribute("type", "password");
  });

  test("... & make snapshot", () => {
    expect(component.container.innerHTML).toMatchSnapshot();
  });
});
