// Requirements
const fetch = require('node-fetch')
const fs = require('fs')
const nodeHtmlToImage = require('node-html-to-image')

const Discord = require('discord.js')
const client = new Discord.Client()


// 'Ready' Event
client.on('ready', () =>{
    console.log("Online.")
    client.user.setActivity('LHOHQ ONLINE WEBHOME')
})


// 'Message' Event
client.on('message', async message=> {
    if (message.author.id !== '267323809437188096') {
        return
    }
    else {
        if(message.content.toString().startsWith('lhohq-start-stream')) {
            console.log('stream starting...')
            let channelID = message.content.toString().toLowerCase().split(' ')[1]
            

            // Fetch the newest comment from LHOHQ ONLINE WEBHOME
            try {
                let newestTimestamp = 'Fri Jan 22, 2021 12:39:18'

                setInterval(() => {
                    fetch('http://phonograph.lhohq.info/index.php')
                    .then((resp) => resp.text())
                    .then(function (data) {
                        let text = data.substring(828).replace(/(\r\n|\n|\r)/gm, ' ').replace(/<!--( {2,})(.*?) {2,}-->/gi, '')

                        if(text !== '') {

                            let timestampReg = new RegExp(/[F-W][a-u][d-u] [A-S][a-u][b-v] [0-3][0-9]. 202[1-9] [0-1][0-9]:[0-5][0-9]:[0-5][0-9]/i)
                            let authorReg = new RegExp(/(?<=(<p class=leftbox><h3>)).*?(?=(<\/h3>))/)
                            let commentReg = new RegExp(/(?<=(<p class=commentbox>)).*?(?=(<\/p>))/)
                            
                            let timestamp = text.match(timestampReg).toString()
                            let author = text.match(authorReg).toString().replace(',<p class=leftbox><h3>,</h3>', '').replace(/<br \/>|<A href=(.*?)>|<\/a>/gim, '')
                            let comment = text.match(commentReg).toString().replace(',<p class=commentbox>,</p>', '').replace(/<br \/>|<A href=(.*?)>|<\/a>/gim, '')



                            if(newestTimestamp !== timestamp) {
                                let colors= ['#ffccff', '#99ffcc', '#cc99ff', '#99cc00', '#0eedd5', '#ffff00']
                                let color = colors[Math.floor(Math.random() * colors.length)]

                                let Embed
                                
                                if (comment.length > 255) {
                                    comment = comment.replace(/ {2,}/gi, '')
                                    let commentArray = comment.match(/.{1,255}/g)

                                    Embed = new Discord.MessageEmbed()
                                    .setAuthor(author)
                                    .setColor(color)
                                    .setFooter(timestamp)

                                    commentArray.forEach(item => {
                                        Embed.addField(item, '\u200b')
                                    })
                                }
                                else {
                                    Embed = new Discord.MessageEmbed()
                                    .setAuthor(author)
                                    .setTitle(comment)
                                    .setFooter(timestamp)
                                    .setColor(color)
                                }
        
                                client.channels.cache.get(channelID).send(Embed)
        
                                newestTimestamp = timestamp
                            }
                        }
                    })
                }, 5000);
            } catch (error) {
            }
        }
    }
})

client.login('ODAxOTA0ODMxNDU0NTExMTQ0.YAneEg.vQatHWYMAiTpzwu7VBo2_aTAo9g');



