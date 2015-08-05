#! /usr/bin/env node
var fs = require('fs')
var path = require('path')
var slugify = require('underscore.string/slugify')

process.argv.slice(2).map(dash)

function dash (src) {
  var ext = path.extname(src)
  var base = path.dirname(src)
  var newFilename = slugify(path.basename(src, ext))
  if (ext) newFilename += '.' + slugify(ext)
  var dest = path.join(base, newFilename)
  fs.renameSync(src, dest)
  console.log(path.basename(dest))
}
