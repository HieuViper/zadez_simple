const { sequelize } = require("./src/models/index");

async function main() {
  await sequelize.sync({ alter: true });
}
main();
