import { PhotoResponseData } from "@/features/photos/types/photo";
import { render, screen } from "@testing-library/react";
import PhotosList from ".";

const mockPhotos: Partial<PhotoResponseData> = {
  photos: [
    {
      alt: "alt image 1",
      photographer: "photographer 1",
      avg_color: "#f4f",
      id: 1,
      photographer_url: "url1",
      src: {
        medium: "medium image 1"
      }
    },
    {
      alt: "alt image 2",
      photographer: "photographer 2",
      avg_color: "#f8d",
      id: 2,
      photographer_url: "url2",
      src: {
        medium: "medium image 2"
      }
    }
  ]
};
vi.mock("@/features/photos/hooks/query/useGetPhotos", () => {
  return {
    useGetPhotos: () => ({
      data: mockPhotos
    })
  };
});

describe("Testes of Photos Page", () => {
  it("should render a list of photos", () => {
    render(<PhotosList />);

    expect(screen.getByText("All photos")).toBeInTheDocument();
    expect(screen.getByText("photographer 1")).toBeInTheDocument();
    expect(screen.getByText("photographer 2")).toBeInTheDocument();
  });
});
