import { Sequelize } from "sequelize";

const sequelize = new Sequelize('kolsaigroup', 'admin_kolsaigroup', 'XsQ@RbfFaYaBb7Fz', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3325
});

export default sequelize;