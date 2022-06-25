import Post from "../../models/Post"

export const getPost = async (req, res) => {
    const allPost = await Post.findAll({});
    return res.json({
        title: "게시글 목록 조회",
        posts: allPost
    })
}
export const getOnePost = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return res.json({
            error: "정상적인 요청이 아닙니다."
        })
    }
    const target = await Post.findOne({
        where: {
            id
        }
    })
    if(!target){
        return res.json({
            error: "해당 글이 없습니다."
        })
    }
    return res.json(target);
}
export const writePost = async (req, res) => {
    const {title, content} = req.body;
    const {id} = req.decoded;
    if(!title || !content){
        return res.json({
            error: "정상적인 요청이 아닙니다."
        });
    }
    const newPost = await Post.create({
        title,
        content,
        writer : id
    })
    return res.json(newPost);
}

export const editPost = async (req, res) => {
    const {title, content} = req.body;
    if(!title || !content){
        return res.json({
            error: "정상적인 요청이 아닙니다."
        })
    }
    const {id} = req.params;
    const loggedInUser = req.decoded.id;
    const target = await Post.findOne({
        where: {
            id
        }
    })
    if(!target){
        return res.json({
            error: "해당 글이 없습니다."
        })
    }
    if(target.writer !== loggedInUser){
        return res.json({
            error: "해당 글의 작성자가 아닙니다."
        })
    }
    await target.update({title, content});
    return res.json(target);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    const loggedInUser = req.decoded.id;
    const target = await Post.findOne({
        where: {
            id
        }
    })
    if(!target){
        return res.json({
            error: "해당 글이 없습니다."
        })
    }
    if(target.writer !== loggedInUser){
        return res.json({
            error: "해당 글의 작성자가 아닙니다."
        })
    }
    await Post.destroy({
        where: {
            id
        }
    });
    return res.send("삭제 완료");
}