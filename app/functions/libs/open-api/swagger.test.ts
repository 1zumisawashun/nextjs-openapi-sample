import axios from "axios";
import jestOpenAPI from "jest-openapi";
import path from "path";

beforeAll(() => {
  const relativePath = "app/functions/libs/open-api/swagger.json";
  const absolutePath = path.resolve(process.cwd(), relativePath);
  jestOpenAPI(absolutePath);
});

describe("GET /api/hello", () => {
  it("should satisfy OpenAPI spec", async () => {
    const res = await axios.get("http://localhost:3000/api/hello");
    console.log(res);

    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
