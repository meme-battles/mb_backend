module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMeme {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Meme {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  postedBy: User!
  imgLink: String!
  cumulative: Int!
  votesUp: Int!
  vsBattleWins: Int!
  vsBattleLoses: Int!
}

type MemeConnection {
  pageInfo: PageInfo!
  edges: [MemeEdge]!
  aggregate: AggregateMeme!
}

input MemeCreateInput {
  id: ID
  postedBy: UserCreateOneWithoutMemesInput!
  imgLink: String!
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

input MemeCreateManyWithoutPostedByInput {
  create: [MemeCreateWithoutPostedByInput!]
  connect: [MemeWhereUniqueInput!]
}

input MemeCreateWithoutPostedByInput {
  id: ID
  imgLink: String!
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

type MemeEdge {
  node: Meme!
  cursor: String!
}

enum MemeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  imgLink_ASC
  imgLink_DESC
  cumulative_ASC
  cumulative_DESC
  votesUp_ASC
  votesUp_DESC
  vsBattleWins_ASC
  vsBattleWins_DESC
  vsBattleLoses_ASC
  vsBattleLoses_DESC
}

type MemePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  imgLink: String!
  cumulative: Int!
  votesUp: Int!
  vsBattleWins: Int!
  vsBattleLoses: Int!
}

input MemeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  imgLink: String
  imgLink_not: String
  imgLink_in: [String!]
  imgLink_not_in: [String!]
  imgLink_lt: String
  imgLink_lte: String
  imgLink_gt: String
  imgLink_gte: String
  imgLink_contains: String
  imgLink_not_contains: String
  imgLink_starts_with: String
  imgLink_not_starts_with: String
  imgLink_ends_with: String
  imgLink_not_ends_with: String
  cumulative: Int
  cumulative_not: Int
  cumulative_in: [Int!]
  cumulative_not_in: [Int!]
  cumulative_lt: Int
  cumulative_lte: Int
  cumulative_gt: Int
  cumulative_gte: Int
  votesUp: Int
  votesUp_not: Int
  votesUp_in: [Int!]
  votesUp_not_in: [Int!]
  votesUp_lt: Int
  votesUp_lte: Int
  votesUp_gt: Int
  votesUp_gte: Int
  vsBattleWins: Int
  vsBattleWins_not: Int
  vsBattleWins_in: [Int!]
  vsBattleWins_not_in: [Int!]
  vsBattleWins_lt: Int
  vsBattleWins_lte: Int
  vsBattleWins_gt: Int
  vsBattleWins_gte: Int
  vsBattleLoses: Int
  vsBattleLoses_not: Int
  vsBattleLoses_in: [Int!]
  vsBattleLoses_not_in: [Int!]
  vsBattleLoses_lt: Int
  vsBattleLoses_lte: Int
  vsBattleLoses_gt: Int
  vsBattleLoses_gte: Int
  AND: [MemeScalarWhereInput!]
  OR: [MemeScalarWhereInput!]
  NOT: [MemeScalarWhereInput!]
}

type MemeSubscriptionPayload {
  mutation: MutationType!
  node: Meme
  updatedFields: [String!]
  previousValues: MemePreviousValues
}

input MemeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemeWhereInput
  AND: [MemeSubscriptionWhereInput!]
  OR: [MemeSubscriptionWhereInput!]
  NOT: [MemeSubscriptionWhereInput!]
}

input MemeUpdateInput {
  postedBy: UserUpdateOneRequiredWithoutMemesInput
  imgLink: String
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

input MemeUpdateManyDataInput {
  imgLink: String
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

input MemeUpdateManyMutationInput {
  imgLink: String
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

input MemeUpdateManyWithoutPostedByInput {
  create: [MemeCreateWithoutPostedByInput!]
  delete: [MemeWhereUniqueInput!]
  connect: [MemeWhereUniqueInput!]
  set: [MemeWhereUniqueInput!]
  disconnect: [MemeWhereUniqueInput!]
  update: [MemeUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [MemeUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [MemeScalarWhereInput!]
  updateMany: [MemeUpdateManyWithWhereNestedInput!]
}

input MemeUpdateManyWithWhereNestedInput {
  where: MemeScalarWhereInput!
  data: MemeUpdateManyDataInput!
}

input MemeUpdateWithoutPostedByDataInput {
  imgLink: String
  cumulative: Int
  votesUp: Int
  vsBattleWins: Int
  vsBattleLoses: Int
}

input MemeUpdateWithWhereUniqueWithoutPostedByInput {
  where: MemeWhereUniqueInput!
  data: MemeUpdateWithoutPostedByDataInput!
}

input MemeUpsertWithWhereUniqueWithoutPostedByInput {
  where: MemeWhereUniqueInput!
  update: MemeUpdateWithoutPostedByDataInput!
  create: MemeCreateWithoutPostedByInput!
}

input MemeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  postedBy: UserWhereInput
  imgLink: String
  imgLink_not: String
  imgLink_in: [String!]
  imgLink_not_in: [String!]
  imgLink_lt: String
  imgLink_lte: String
  imgLink_gt: String
  imgLink_gte: String
  imgLink_contains: String
  imgLink_not_contains: String
  imgLink_starts_with: String
  imgLink_not_starts_with: String
  imgLink_ends_with: String
  imgLink_not_ends_with: String
  cumulative: Int
  cumulative_not: Int
  cumulative_in: [Int!]
  cumulative_not_in: [Int!]
  cumulative_lt: Int
  cumulative_lte: Int
  cumulative_gt: Int
  cumulative_gte: Int
  votesUp: Int
  votesUp_not: Int
  votesUp_in: [Int!]
  votesUp_not_in: [Int!]
  votesUp_lt: Int
  votesUp_lte: Int
  votesUp_gt: Int
  votesUp_gte: Int
  vsBattleWins: Int
  vsBattleWins_not: Int
  vsBattleWins_in: [Int!]
  vsBattleWins_not_in: [Int!]
  vsBattleWins_lt: Int
  vsBattleWins_lte: Int
  vsBattleWins_gt: Int
  vsBattleWins_gte: Int
  vsBattleLoses: Int
  vsBattleLoses_not: Int
  vsBattleLoses_in: [Int!]
  vsBattleLoses_not_in: [Int!]
  vsBattleLoses_lt: Int
  vsBattleLoses_lte: Int
  vsBattleLoses_gt: Int
  vsBattleLoses_gte: Int
  AND: [MemeWhereInput!]
  OR: [MemeWhereInput!]
  NOT: [MemeWhereInput!]
}

input MemeWhereUniqueInput {
  id: ID
}

type Mutation {
  createMeme(data: MemeCreateInput!): Meme!
  updateMeme(data: MemeUpdateInput!, where: MemeWhereUniqueInput!): Meme
  updateManyMemes(data: MemeUpdateManyMutationInput!, where: MemeWhereInput): BatchPayload!
  upsertMeme(where: MemeWhereUniqueInput!, create: MemeCreateInput!, update: MemeUpdateInput!): Meme!
  deleteMeme(where: MemeWhereUniqueInput!): Meme
  deleteManyMemes(where: MemeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  meme(where: MemeWhereUniqueInput!): Meme
  memes(where: MemeWhereInput, orderBy: MemeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meme]!
  memesConnection(where: MemeWhereInput, orderBy: MemeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  meme(where: MemeSubscriptionWhereInput): MemeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  password: String!
  email: String!
  role: Role!
  memes(where: MemeWhereInput, orderBy: MemeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meme!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  password: String!
  email: String!
  role: Role
  memes: MemeCreateManyWithoutPostedByInput
}

input UserCreateOneWithoutMemesInput {
  create: UserCreateWithoutMemesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMemesInput {
  id: ID
  name: String!
  password: String!
  email: String!
  role: Role
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  password: String!
  email: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  password: String
  email: String
  role: Role
  memes: MemeUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  password: String
  email: String
  role: Role
}

input UserUpdateOneRequiredWithoutMemesInput {
  create: UserCreateWithoutMemesInput
  update: UserUpdateWithoutMemesDataInput
  upsert: UserUpsertWithoutMemesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMemesDataInput {
  name: String
  password: String
  email: String
  role: Role
}

input UserUpsertWithoutMemesInput {
  update: UserUpdateWithoutMemesDataInput!
  create: UserCreateWithoutMemesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  memes_every: MemeWhereInput
  memes_some: MemeWhereInput
  memes_none: MemeWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    