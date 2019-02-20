export const home = (req,res) => res.render("home", {pageTitle : "home"});
export const search = (req,res) => res.render("search", {search : "search"});
export const upload = (req,res) => res.render("upload", {upload : "upload"});
export const videoDetail = (req,res) => res.render("videoDetail", {videoDetail : "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {editVideo : "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {deleteVideo : "deleteVideo"});