const { test, trait } = use("Test/Suite")("Session");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model/User')} */

const User = use("App/Models/User");

trait("Test/ApiClient");

test("it should return JWT token when session is created", async ({
  assert,
  client,
}) => {
  const sessionPayload = {
    email: "kevinnog@outlook.com.br",
    password: "123456s",
  };

  const user = await Factory.model("App/Models/User").create(sessionPayload);

  const response = await client.post("/sessions").send(sessionPayload).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
