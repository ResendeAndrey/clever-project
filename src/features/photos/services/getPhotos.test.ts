import api from "@/services/api";
import { getPhotos } from "./getPhotos";
import { PhotoResponseData } from "../types/photo";

vi.mock("@/services/photos");

describe("getPhotos service", () => {
  const mockedApi = api as unknown as {
    get: ReturnType<typeof vi.fn>;
  };

  const fakeResponse: Partial<PhotoResponseData> = {
    page: 1,
    per_page: 10,
    photos: [
      {
        id: 1,
        photographer: "John Doe",
        avg_color: "#ffffff",
        photographer_url: "https://example.com/photographer",
        src: {
          medium: "https://example.com/photo-medium.jpg"
        },
        alt: "Example photo"
      }
    ],
    total_results: 100,
    next_page: "https://example.com/next"
  };

  beforeEach(() => {
    mockedApi.get = vi.fn().mockResolvedValue({ data: fakeResponse });
  });

  it("should fetch photos successfully", async () => {
    const params = { query: "nature", limit: 10, page: 1 };

    const result = await getPhotos(params);

    expect(mockedApi.get).toHaveBeenCalledWith("/photos", { params });
    expect(result).toEqual(fakeResponse);
  });

  it("should fetch without params", async () => {
    await getPhotos();
    expect(mockedApi.get).toHaveBeenCalledWith("/photos", {
      params: undefined
    });
  });
});
