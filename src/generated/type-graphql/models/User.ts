import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | undefined;

  posts?: Post[] | undefined;
}
