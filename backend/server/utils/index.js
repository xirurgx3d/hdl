export const imgUpload = (flie) =>{
    const {img} = req.files
    let filename = img.name
    img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
    return filename
}