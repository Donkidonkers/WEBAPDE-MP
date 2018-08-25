const mongoose = require('./connectionBase').connection
const dateTime = require('node-datetime')

//MEME
const memeSchema = new mongoose.Schema({
    user: {
        type: String // name of the person
    },
    title: {
        type: String
    },
    image: {
        type: String //url of the image
    },
    comments: {
        type: [String] //array of comment IDs (ideally, but could just be array of comments)
    },
    tags: {
        type: [String]
    },
    datePosted: {
        type: String //date the post was created
    }
})


const memeModel = mongoose.model('posts', memeSchema)

function uploadMeme(memeTitle, memeImageLink, memePoster, memeTags, callback){
    var dt = dateTime.create()
    var dtFormat = dt.format('m/d/Y')

    const memeInstance = memeModel({
        user: memePoster,
        title: memeTitle,
        image: memeImageLink,
        comments: [],
        tags: memeTags,
        datePosted: dtFormat
    })

    memeInstance.save(function (err, inv) {
        if (err)  return console.error(err)
        callback()
    })
}

module.exports.uploadMeme = uploadMeme

function viewAllPublicMemes(){
    
}

function viewAllProfileMemes(){
    
}

//SEARCHING BY NAME AND TAG
function viewMemesbySearchName(){
    
}

function viewMemesbySearchTag(){
    
}

function uploadMeme(){
    
}

function editMeme(){
    
}

function deleteMeme(){
    
}

//Should add auto complete
function searchMemeByName(){
    
}

function searchMemeByTag(){
    
}
