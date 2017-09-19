const
  mongoose = require('mongoose'),
  resourceSchema = mongoose.Schema({
    name: String,
    link: String
  })
  postSchema = mongoose.Schema({
    title: String,
    body: String
  })
  languageSchema = mongoose.Schema({
    name: String,
    resources: [resourceSchema],
    posts: [postSchema]
  })

module.exports = mongoose.model('Language', languageSchema)
