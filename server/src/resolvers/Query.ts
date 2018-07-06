import { getUserId, Context } from '../utils'
import { createTweet } from './Mutation/createTweet';

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  tweets(parent, args, ctx: Context, info) {
    return ctx.db.query.tweets({}, info)
  },
  tweet(parent, args, ctx: Context, info) {
    return ctx.db.query.tweet({ where: {id: args.id}}, info)
  }
}
