const fs = require('fs')

module.exports = class Repository{
  constructor (filename){
    if(!filename){
      throw new Error('Voce precisa informar o nome do arquivo!')
    }this.filename = filename;
    try{
      fs.accessSync(this.filename)
    }catch(error){
      fs.writeFileSync(this.filename, "[]")
    }
  }
}