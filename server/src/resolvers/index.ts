import { Query } from './Query'
import { AuthPayload } from './AuthPayload'
import { auth } from './Mutation/auth'
import { createTweet } from './Mutation/createTweet'

export default {
  Query,
  Mutation: {
    ...auth,
    createTweet
  },
  AuthPayload,
}
