const cloudinary = require('cloudinary');

cloudinary.config({
    CloudName: process.env.Cloud_Name,
    APIKey: process.env.API_Key,
    APISecret: process.env.API_Secret
})

exports.uplouds = (file, folder) => {
    return new Promise(reslove => {
        cloudinary.uplouder.uploud(file, (result) => {
            reslove({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        }
        )
    })
}