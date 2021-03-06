import routes from "../routes";
import Video from "../models/Video";
export const home = async(req, res) => { 
    try {
        const videos = await Video.find({}).sort({_id:-1});
        res.render("home", { pageTitle: "home", videos}); 
    } catch (error){
        console.log(error);
        res.render("home", { pageTitle: "home", videos: []}); 
    }
}
export const search = async (req,res) => {
    //const searchingBy = req.query.term;
    const {
        query : {term : searchingBy}
    } = req
    console.log(searchingBy)
    let videos = [];
    try {
        videos = await Video.find({ 
            title : {$regex : searchingBy, $options: "i"}
        })
        console.log(videos)
    } catch(error){
        console.log(error);
    }
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
        res.render("videoDetail", {pageTitle : video.title, video})
    } catch(error){
        res.redirect(routes.home);
    }
}
export const getEditVideo = async (req,res) => {
    const {
        params: {id}
    } = req
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle : `edit ${video.title}`, video})
    } catch(error){
        res.redirect(routes.home)
    }
}
export const postEditVideo = async (req,res) => {
    const {
        params: {id},
        body: {title, description}
    } = req
    try{
        await Video.findOneAndUpdate({_id : id},{title, description})
        res.redirect(routes.videoDetail(id))
    } catch(error){
        res.redirect(routes.home)
    }
}

export const deleteVideo = async (req,res) => {
    const {
        params: {id}
    } = req
    try {
        await Video.findOneAndDelete({_id : id})
        res.redirect(routes.home)
    } catch(error) {
        res.redirect(routes.home)
    }

}