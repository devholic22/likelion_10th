import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { passwordHash } from "../../middlewares";

export const getRegister = (req, res) => {
    return res.status(200).send("회원가입 등록 페이지");
}

export const postRegister = async (req, res) => {
    const {email, username, password} = req.body;
    if(!email || !username || !password){
        return res.status(400).json({
            error: "정상적인 요청이 아닙니다."
    });
    }
    const isEmailExist = await User.findOne({
        where: {email}
    })
    if(isEmailExist){
        return res.status(400).json({
            error: "Email already exist"
        })
    }
    await User.create({
        email,
        username,
        password: await passwordHash(password)
    });
    return res.status(200).send("회원가입 완료");
}

export const getLogin = (req, res) => {
    return res.status(200).send("로그인 페이지");
}

export const postLogin = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json("정상적인 요청이 아닙니다.");
    }
    const existUser = await User.findOne({
        where: {email}
    });
    if(existUser){
        const isPasswordCorrect = bcrypt.compareSync(String(password), existUser.password);
        if(isPasswordCorrect){
            const token = jwt.sign(
                {
                    id: existUser.id
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "5m",
                    issuer: "likelion"
                }
            );
            return res.status(200).json({
                code: 200,
                message: "토큰이 발급되었습니다",
                token
            });
        }
        return res.status(400).json({error: "비밀번호가 일치하지 않습니다."});
    }
    return res.status(400).json({
        error: "등록되지 않은 이메일입니다."
    })
}