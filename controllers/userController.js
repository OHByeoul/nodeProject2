export const join  = (req,res) => res.render("join", {pageTitle : "Join"});
export const login = (req,res) => res.render("login", {pageTitle : "Log In"});
export const logout = (req,res) => res.render("logout", {pageTitle : "Log Out"}); //export 작업을 통해서 각 Router에 단어만 입력하면 자동으로 import 해준다
export const editProfile = (req,res) => res.render("editProfile", {pageTitle : "User Detail"});
export const userDetail = (req,res) => res.render("userDetail", {pageTitle : "Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword", {pageTitle : "Change Password"});
