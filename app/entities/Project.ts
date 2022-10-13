import { ObjectType, Field } from 'type-graphql';
import {  getModelForClass ,prop as Property } from '@typegoose/typegoose';


@ObjectType({ description: 'The Project model' })
export class Project {
//   @Field(() => ID)
//   id: String;

  @Field()
  @Property({ nullable: true })
  title: String;

  @Field()
  @Property({ nullable: true })
  estimatedBudget: number;

  @Field()
  @Property({ nullable: true })
  totalFte: number;

  @Field()
  @Property({ nullable: true })
  fteAllocationRate: number;

  @Field()
  @Property({ nullable: true })
  fundingDepartment: String;

  @Field()
  @Property({ nullable: true })
  description: String;

  @Field()
  @Property({ nullable: true })
  owner: String;

  @Field()
  @Property({ nullable: true })
  createdOn: String;

  @Field()
  @Property({ nullable: true })
  endDate: String;

  @Field()
  @Property({ nullable: true })
  timeline: String;

  @Field()
  @Property({ nullable: true })
    noOfFte: number;

  @Field()
  @Property({ nullable: true })
  status: String;
}

export const ProjectModel = getModelForClass(Project);
