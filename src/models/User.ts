import { v4 as uuidv4 } from 'uuid'
import { Tweet } from './Tweet'
import { tweetsDatabse } from '../database/tweetsDatabase'
import { accountDatabse } from '../database/AccountDatabase'

export class User {
    private readonly id: string = uuidv4()

    private following: User[] = []

    constructor(
        private _name: string,
        private _username: string,
        private _email: string,
        private _password: string
    ) {

        if (accountDatabse.find(tweetAccount => tweetAccount.username === this._username)) {
            throw new Error("This username already exist!")
        }

        accountDatabse.push(this)
    }

    get username(): string{
        return this._username
    }

    sendTweet(tweet: Tweet){
        tweetsDatabse.push(tweet)
    }

    follow(user: User){
        if(user.id === this.id){
            console.log("O usuario não pode seguir a si mesmo")
        } else if (!this.following.includes(user)){
            this.following.push(user)
            console.log(`Você está seguindo ${user._name}`)
        }else{
            console.log('Você ja está seguindo esse user')
        }
        console.log('---------------------------------------------')
    }

    showFeed(){
        // tweetsDatabse.forEach(tweet => {
        //     this.following.forEach(id => {
        //         console.log('s')
        //         if(tweet.user === id || tweet.user.id === this.id){
        //             console.log(`@${tweet.user._username}: ${tweet.content}`)
        //             this.likes(tweet)
        //             this.comments(tweet)
        //         }
        //     })
            
        // })
        console.log(' ')
        console.log(' ')
        console.log(' ')
        console.log(`-----------FeedUser @${this.username}---------------`)
        tweetsDatabse.forEach(tweet => {
            const isFollowing = this.following.some(id => tweet.user === id);
            
            if(isFollowing || tweet.user.id === this.id){
                console.log(`@${tweet.user._username}: ${tweet.content}`);
                this.likes(tweet);
                this.comments(tweet);
            }
        });
    
    }

    showTweets(){ 
        console.log(' ')
        console.log(' ')
        console.log(' ')
        console.log(`-----------Tweets @${this.username}---------------`)
        tweetsDatabse.forEach(tweet => {
            if(tweet.user.id === this.id){
                console.log(`@${tweet.user._username}: ${tweet.content}`)
                this.likes(tweet)
                this.comments(tweet)
            }
        })
    }

    private likes(tweet: Tweet): void{
        const likes = tweet.likes.length

        if(likes === 1){
            console.log(`${tweet.likes[0]._username} liked this`)
        }else if(likes > 1){
            if(likes === 2){
                console.log(`${tweet.likes[0]._username} and other 1 liked this`)
            }else{
                console.log(`${tweet.likes[0]._username} and others ${likes - 1} liked this`)
            }
        }
    }

    private comments(tweet: Tweet): void{

        if(tweet.replys.length > 0){
            tweet.replys.forEach(comment => {
                console.log(`   > @${comment.user._username}: ${comment.content}`)

            })
        }
        console.log('---------------------------------------------')
    }

    showFollowing(){
        if(this.following.length !== 0){
            console.log(`Seguindo: ${this.following.length}`)
            this.following.forEach(show => {
                console.log(`   @${show._username}`)
            })
        }else{
            console.log('Seguindo: 0')
        }
        console.log('---------------------------------------------')
    }
    
//     showFollowers(){
//         if(this.followers.length !== 0){
//             console.log(`Seguidores: ${this.followers.length}`)
//             this.followers.forEach(show => {
//                 console.log(`   @${show._username}`)
//             })
//         }else{
//             console.log('Seguidores: 0')
//         }
//         console.log('---------------------------------------------')
//     }
} 