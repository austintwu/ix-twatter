import { Context } from '../../utils'

export async function createTweet(parent, args, ctx: Context, info){
    return await ctx.db.mutation.createTweet({
        data: {
            text: args.text,
            author: {
                connect: {
                    email: args.author
                }
            }
        }
    }, info)
}