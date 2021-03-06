import routes from "../routes";

export const getJoin  = (req,res) => {
    res.render("join", {pageTitle : "Join"});
};

export const postJoin = (req,res)=>{
    console.log(req.body);
    const {
        body : {name,email,password,password2}
    } = req;
    if(password !== password2){
       res.status(400);
       res.render("join", {pageTitle : "Join"});
    } else {
        // to do : register user
        // to do : log user in
        res.redirect(routes.home);
    }
};
export const getLogin = (req,res) => {
    res.render("login", {pageTitle : "Log In"});
};
export const postLogin = (req,res) => {
    res.redirect(routes.home);
};
export const logout = (req,res) => res.render("logout", {pageTitle : "Log Out"}); //export 작업을 통해서 각 Router에 단어만 입력하면 자동으로 import 해준다
export const editProfile = (req,res) => res.render("editProfile", {pageTitle : "User Detail"});
export const userDetail = (req,res) => res.render("userDetail", {pageTitle : "Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword", {pageTitle : "Change Password"});
