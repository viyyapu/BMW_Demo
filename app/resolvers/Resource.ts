import {
    Resolver,
    Mutation,
    Arg,
    Query,
  } from 'type-graphql';
  import { Resource } from '../entities/Resource';
import { ResourceInput } from './types/Resource-input';
import { ResourceModel } from '../entities/Resource';

@Resolver((_of) => Resource)
export class ResourceResolver{
    @Query((_returns) => Resource, { nullable: false })
    async returnSingleResource(@Arg('id') id: string) {
      return await ResourceModel.findById({ _id: id });
    }
  
    @Query(() => [Resource])
    async returnAllResource() {
      console.log('BMW')
    return await ResourceModel.find();
  }


    @Mutation(() => Resource)
    async createResource(
      @Arg('data') { firstName, lastName, department, groupTeam, allocation, role }: ResourceInput
    ): Promise<Resource> {
        console.log(firstName, lastName)
      const resource = (
        await ResourceModel.create({
            firstName,
            lastName,
            department, 
            groupTeam, 
            allocation, 
            role
        })
      ).save();
      return resource;
    }

    @Mutation(() => Boolean)
  async deleteResource(@Arg('id') id: string) {
    await ResourceModel.deleteOne({ id });
    return true;
  }



}