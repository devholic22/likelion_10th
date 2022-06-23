const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // 테이블에 대한 설정
        return super.init({ // 테이블 컬럼에 대한 설정
            email: {
                type: Sequelize.STRING(20)
            },
            username: {
                type: Sequelize.STRING(15)
            },
            password: {
                type: Sequelize.STRING(15)
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
        // User 안에 있는 "id값"을 "writer 라는 컬럼 이름"으로 Post 모델에 새로운 컬럼으로 추가한다
        db.User.hasMany(db.Post, { foriegnKey: 'writer', targetKey: 'id'});
    }
};