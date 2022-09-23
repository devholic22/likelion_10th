const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) { // 테이블에 대한 설정
    return super.init( // 테이블 컬럼에 대한 설정
      {
        title: {
          type: Sequelize.STRING(20)
        },
        content: {
          type: Sequelize.STRING(100)
        },
        writer: {
          type: Sequelize.INTEGER
        }
      },
      { // 테이블 자체에 대한 설정
        sequelize,
        timestamps: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci"
      }
    );
  }
  static associate(db) { // 다른 모델과의 관계
    // belongsTo에서 targetKey를 설정하고, hasMany에서 sourceKey를 설정한다
    db.Post.belongsTo(db.User, { foreignKey: "writer", targetKey: "id" });
  }
};
