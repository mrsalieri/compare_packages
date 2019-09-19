const request = require("supertest");
const server = require("../../server");

describe("middlewares.notFound", () => {
  let input;

  afterEach(async () => {
    await server.close();
  });

  beforeEach(() => {
    input = {
      name: "test8054"
    };
  });

  const exec = () => {
    return request(server)
      .post("/api/gdhmgdggh")
      .send(input);
  };

  it("status 404 url not found", async () => {
    const res = await exec();

    expect(res.status).toBe(404);
  });
});
