import { test, expect, describe, jest, mock } from "bun:test";
import { animationDirection, randomDirection } from "./animate";

const RandomDirectionMock = jest.fn();

mock("./animate", () => {
  const originalModule = jest.requireActual("./animate");

  return {
    __esModule: true,
    ...originalModule,
    randomDirection: RandomDirectionMock,
  };
});

describe("Testing 'animateDirection' function", () => {
  test("... & with left direction and vh measure", () => {
    expect(animationDirection("left", "vh")).toBe("-100vh");
  });

  test("... & with right direction and vh measure", () => {
    expect(animationDirection("right", "vh")).toBe("100vh");
  });

  test("... & with right direction and vw measure", () => {
    expect(animationDirection("right", "vw")).toBe("100vw");
  });

  test("... & with left direction and vw measure", () => {
    expect(animationDirection("left", "vw")).toBe("-100vw");
  });

  test("... & with random direction", () => {
    RandomDirectionMock.mockResolvedValueOnce(-1).mockResolvedValueOnce(1);
    expect(animationDirection("random", "vw")).toBe("-100vw");
    expect(animationDirection("random", "vw")).toBe("100vw");
  });
});
