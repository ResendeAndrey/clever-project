import { render, screen } from "@testing-library/react";
import Image from "./index.tsx";

describe("Testes of Image Component", () => {
  it("should render a image", () => {
    render(<Image src="/image.jpg" alt="image" className="image" />);
    expect(screen.getByAltText("image")).toBeInTheDocument();
  });
});
