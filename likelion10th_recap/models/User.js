const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // 테이블에 대한 설정
        return super.init({ // 테이블 컬럼에 대한 설정
            email: {
                type: Sequelize.STRING(50)
            },
            username: {
                type: Sequelize.STRING(15)
            },
            password: {
                type: Sequelize.STRING(60)
            }
		}, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){ // 다른 모델과의 관계
        // belongsTo에서 targetKey를 설정하고, hasMany에서 sourceKey를 설정한다
        // User의 id는 hasMany의 sourceKey이자 belongsTo의 targetKey
        db.User.hasMany(db.Post, { foreignKey: 'writer', sourceKey: 'id'});
    }
};