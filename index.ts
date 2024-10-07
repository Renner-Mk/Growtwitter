import { Tweet, Type } from './src/models/Tweet'
import { User } from './src/models/User'

const user1 = new User('Patrick', "Renner", 'Teste@test.com', 'as3')
const user2 = new User('Arnaldo', "Naldinho", 'Teste@test.com', 'as3')
const user3 = new User('Joana', "Jo", 'Teste@test.com', 'as3')

// user1.showFollowing()

user1.follow(user2)
user2.follow(user3)
user3.follow(user1)

// user1.showFollowing()

const tweet1 = new Tweet('Belo dia para passear', Type.Tweet, user1)
const tweet4 = new Tweet('Partiu praia', Type.Tweet, user2)
const tweet7 = new Tweet('Dia chuvoso e monotono', Type.Tweet, user3)
const tweet2 = new Tweet('O parque está incrivel', Type.Tweet, user1)
const tweet5 = new Tweet('O mar é lindo', Type.Tweet, user2)
const tweet8 = new Tweet('Filmes e pipoca', Type.Tweet, user3)

user1.sendTweet(tweet1)
user2.sendTweet(tweet4)
user3.sendTweet(tweet7)

user1.sendTweet(tweet2)
user2.sendTweet(tweet5)
user3.sendTweet(tweet8)


tweet1.reply('Concordo', user2)
tweet5.reply('Magnifico', user3)
tweet8.reply('Aceito', user3)
tweet4.reply('Dale água de coco', user1)
tweet4.reply('Passe protetor', user3)

tweet1.like(user1)
tweet1.like(user2)
tweet1.like(user3)

tweet2.like(user1)
tweet2.like(user2)

tweet4.like(user1)

tweet5.like(user1)
tweet5.like(user2)
tweet5.like(user3)

tweet7.like(user1)
tweet7.like(user2)

tweet8.like(user3)


user2.showFeed()
user1.showFeed()
user3.showFeed()

user2.showTweets()