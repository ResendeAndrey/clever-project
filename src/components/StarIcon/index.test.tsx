import { render, screen } from "@testing-library/react";
import { StarIcon } from ".";

describe("Testes of Loading Component", () => {
  it("should render a startIcon Favorite true", () => {
    render(<StarIcon favorite />);
    const svg = screen.getByTestId("star-icon");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("fill-favorite stroke-favorite");
  });
  it("should render a startIcon Favorite false", () => {
    render(<StarIcon favorite={false} />);
    const svg = screen.getByTestId("star-icon");
    expect(svg).toHaveClass("fill-none stroke-non_favorite");
  });
});
