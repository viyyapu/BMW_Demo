import { InputType, Field } from 'type-graphql';
import { Project } from '../../entities/Project';


@InputType()
export class ProjectInput implements Partial<Project> {

  @Field()
  title: String;

  @Field()
  estimatedBudget: number;

  @Field()
  totalFte: number;

  @Field()
  fteAllocationRate: number;

  @Field()
  fundingDepartment: String;

  @Field()
  description: String;

  @Field()
  owner: String;

  @Field()
  createdOn: String;

  @Field()
  endDate: String;

  @Field()
  timeline: String;

  @Field()
  noOfFte: number;

  @Field()
  status: String;
}