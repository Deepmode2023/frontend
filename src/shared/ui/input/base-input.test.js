import { render, screen } from "@testing-library/react";
import { expect, test, describe, beforeEach } from "bun:test";
import { BaseInput } from "./base-input";

describe("Testing BaseInput component", () => {
  let component;
  const defaultProps = {};
  beforeEach(() => {
    component = render(<BaseInput {...defaultProps} />);
  });
  test("... & fs test with label props", () => {
    expect(screen(component)).toBe("Hello");
  });
});
