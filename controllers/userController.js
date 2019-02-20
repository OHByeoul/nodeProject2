export const join  = (req,res) => res.render("join");
export const login = (req,res) => res.render("login");
export const logout = (req,res) => res.render("logout"); //export 작업을 통해서 각 Router에 단어만 입력하면 자동으로 import 해준다
export const userDetail = (req,res) => res.send("userDetail");
export const editProfile = (req,res) => res.send("editProfile");
export const changePassword = (req,res) => res.send("changePassword");
