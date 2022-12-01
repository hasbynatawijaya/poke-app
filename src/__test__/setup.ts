import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

expect.extend(matchers);
