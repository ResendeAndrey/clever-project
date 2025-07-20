import { UserPayloadProps } from "../types/user";
import { RequestLogin } from "./login";

vi.mock("@services/api", () => {
  return {
    api: {
      post: vi.fn()
    }
  };
});

describe("Testes of login service", () => {
  it("should be able to login", () => {
    expect(true).toBeTruthy();
  });
  it("should return data on success login", async () => {
    const mockData: UserPayloadProps = {
      username: "johndoe@example.com",
      password: "password123"
    };

    const result = await RequestLogin(mockData);
    expect(result).toHaveProperty("token");
  });
});
