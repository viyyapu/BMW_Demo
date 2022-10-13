import { InputType, Field } from 'type-graphql';
import { Resource } from '../../entities/Resource';


@InputType()
export class ResourceInput implements Partial<Resource> {

  @Field()
  firstName: String;

  @Field()
  lastName: String;

  @Field()
  department: String;

  @Field()
  groupTeam: String;

  @Field()
  allocation: number;

  @Field()
  role: String;

}