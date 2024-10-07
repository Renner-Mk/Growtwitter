import { v4 as uuidv4 } from 'uuid'
import { User } from './User'

export enum Type {
    Retweet = 'Retweet',
    Tweet = 'Tweet'
}

interface Replys {
    user: User
    content: string
}

export class Tweet{
    private readonly _id: string = uuidv4()

    public likes: User[] = []
    public replys: Replys[] = []
    
    constructor(
        public content: string,
        public type: Type,
        public readonly user: User
    ) {}

    get id(): string{
        return this._id
    }

    reply(content: string, user: User): void{
        const reply = new Tweet(content, Type.Retweet, user)

        this.replys.push(reply)
    }

    like(user: User): void{
        if(this.likes.find(u => u === user)){
            console.log("Você já curtiu essa publicação")
        }else{
            this.likes.push(user)
        }
    }

    
}