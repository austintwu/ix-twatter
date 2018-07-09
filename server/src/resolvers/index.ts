<<<<<<< HEAD
import { Query } from './Query'
import { AuthPayload } from './AuthPayload'
import { auth } from './Mutation/auth'
import { createTweet } from './Mutation/createTweet'
=======
import { extractFragmentReplacements } from "prisma-binding"
import Viewer from "./Viewer"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import tweet from "./Mutation/tweet"
import { AuthPayload } from "./AuthPayload"
>>>>>>> upstream/master

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
<<<<<<< HEAD
    createTweet
=======
    ...tweet
>>>>>>> upstream/master
  },
  Viewer,
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
