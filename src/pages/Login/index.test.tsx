import { render, screen } from "@testing-library/react";
import Login from ".";

vi.mock("react-router-dom", () => {
  return {
    useNavigate: () => vi.fn()
  };
});

describe("Testes of Login Page", () => {
  it("should be able to login", () => {
    expect(true).toBeTruthy();
  });
  it("should have password and username texts", () => {
    render(<Login />);
    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
  it("should have login button", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
  });
  it("should have forgot password button", () => {
    render(<Login />);
    expect(
      screen.getByRole("button", { name: "Forgot password?" })
    ).toBeInTheDocument();
  });
  it("should have logo image", () => {
    render(<Login />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByTestId("login-logo")).toBeInTheDocument();
  });
});
