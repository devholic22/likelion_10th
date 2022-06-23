const { Sequelize } = require("sequelize");

// 모델 등록
const User = require("./User");
const Post = require("./Post");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize( //config의 db정보와 연결
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

// 모델 등록
db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;