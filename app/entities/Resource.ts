import { ObjectType, Field } from 'type-graphql';
import {  getModelForClass ,prop as Property } from '@typegoose/typegoose';


@ObjectType({ description: 'The Resource model' })
export class Resource {
//   @Field(() => ID)
//   id: String;

  @Field()
  @Property({ nullable: true })
  firstName: String;

  @Field()
  @Property({ nullable: true })
  lastName: String;

  @Field()
  @Property({ nullable: true })
  department: String;

  @Field()
  @Property({ nullable: true })
  groupTeam: String;

  @Field()
  @Property({ nullable: true })
  allocation: number;

  @Field()
  @Property({ nullable: true })
  role: String;

}

export const ResourceModel = getModelForClass(Resource);
