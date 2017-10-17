const
  Language = require('../models/Language.js')

module.exports = {
  index: (req, res) => {
    Language.find({}, (err, languages) => {
      if(err) return console.log(err)
      res.render('languages/index', {languages: languages})
    })
  },
  show: (req, res) => {
    Language.findById(req.params.id, (err, language) => {
      if(err) return console.log(err)
      res.render('languages/show', {language: language})
    })
  },
  new: (req, res) => {
    res.render('languages/new')
  },
  create: (req, res) => {
    Language.create(req.body, (err, language) => {
      if(err) return console.log(err)
      res.redirect('/languages/' + language.id)
    })
  },
  edit: (req, res) => {
    Language.findById(req.params.id, (err, language) => {
      if(err) return console.log(err)
      res.render('languages/edit', {language: language})
    })
  },
  update: (req, res) => {
    Language.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, language) => {
      if (err) return console.log(err)
      res.redirect('/languages/' + language.id)
    })
  },
  destroy: (req, res) => {
    Language.findByIdAndRemove(req.params.id, (err, language) => {
      if(err) return console.log(err)
    })
    res.redirect('/languages')
  },
  resourceNew: (req, res) => {
    Language.findById(req.params.id, (err, language) => {
      if(err) return console.log(err)
      res.render('resources/new', {language: language})
    })
  },
  resourceCreate: (req, res) => {
    Language.findById(req.params.id, (err, language) => {
      if(err) return console.log(err)
      language.resources.push(req.body)
      language.save((err) => {
        res.redirect('/languages/'+ language.id)
      })
    })
  }
}
