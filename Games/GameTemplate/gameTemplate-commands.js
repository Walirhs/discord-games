const { Discord, fs, arrayOfFile } = require(`./../../function.js`)


module.exports  =  {
  commands : [
    {
      name : 'ping',
      description : 'Pong !',
      execute(bot,games,message,args, settings) {
        message.channel.send("Pong!");
      }
    }
  ]
}

/*
!
*/
