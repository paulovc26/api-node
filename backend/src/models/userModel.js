const connection = require("./connection");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users");
  return users;
};

const getOneUser = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";
  const [user] = await connection.execute(query, [username]);
  return user[0];
};

const createUser = async (user) => {
  const { username, password } = user;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users(username, password) VALUES (?, ?)";

  const [createdUser] = await connection.execute(query, [
    username,
    hashedPassword,
  ]);

  return createdUser;
};

//todo put e delete

// const deleteTask = async (id) => {
//   const removedTask = await connection.execute(
//     "DELETE FROM tasks WHERE id = ?",
//     [id]
//   );
//   return removedTask;
// };

// const updateTask = async (id, task) => {
//   const query = "UPDATE tasks SET title = ?, status = ? where id = ?";
//   const { title, status } = task;

//   const updatedTask = await connection.execute(query, [title, status, id]);
//   return updatedTask;
// };

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
};
