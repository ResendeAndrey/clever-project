import { render, screen } from "@testing-library/react";
import PasswordLabel from ".";

describe("Testes of PasswordLabel Component", () => {
  it("should render a PasswordLabel", () => {
    render(<PasswordLabel />);
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });
});
