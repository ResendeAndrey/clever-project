import { renderHook } from "@testing-library/react";
import useCheckStorage from "./useCheckStorage";

describe("useCheckStorage", () => {
  it("should return true if storage is available", () => {
    const { result } = renderHook(() => useCheckStorage());
    expect(result.current).toStrictEqual({ userStorage: null });
  });
});
