import { expect, test, describe } from "vitest";
import { filterByWingspan } from "./maxWingSpan";
import { birds } from "../data/birds";

describe("right output by Wingspan search", () => {
    test("serch for  wingspan_max in any Birds", () => {
      const result = filterByWingspan(birds, "wingspan_max")
      expect(result)
    });
  });
  