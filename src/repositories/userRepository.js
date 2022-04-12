import connection from "../database.js";

async function checkUsers(email) {
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return existingUsers;
}

async function addUser(name, email, hashedPassword) {
  await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}

async function loginUser(email) {
  const { rows } = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );
  const [user] = rows;

  return [user];
}
export { checkUsers, addUser, loginUser };
