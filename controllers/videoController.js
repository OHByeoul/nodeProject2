import routes from "../routes";
import Video from "../models/Video";
export const home = async(req, res) => { 
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "home", videos}); 
    } catch (error){
        console.log(error);
        res.render("home", { pageTitle: "home", videos: []}); 
    }
}
export const search = (req,res) => {
    //const searchingBy = req.query.term;
    const {query : {term : searchingBy}} = req;
    res.render("search", {pageTitle : "Search", searchingBy, videos});
}
export const getUpload = (req,res) => 
    res.render("upload", {pageTitle : "upload"});

export const postUpload = async (req,res) => {
    const {
       body: {title, description},
       file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title: title,
        description: description
    })


    res.redirect(routes.videoDetail(newVideo.id))
    //res.render("upload", {pageTitle : "upload"});
}

export const videoDetail = async (req,res) => {
    const {
        params: {id}
    } = req
    console.log(req.params)
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle : "videoDetail", video})
    } catch(error){
        res.redirect(routes.home);
    }
}
export const editVideo = (req,res) => res.render("editVideo", {pageTitle : "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "deleteVideo"});