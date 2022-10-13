import {
    Resolver,
    Mutation,
    Arg,
    Query,
  } from 'type-graphql';
  import { Project } from '../entities/Project';
import { ProjectInput } from './types/project-input';
import { ProjectModel } from '../entities/Project';

@Resolver((_of) => Project)
export class ProjectResolver{
    @Query((_returns) => Project, { nullable: false })
    async returnSingleProject(@Arg('id') id: string) {
      return await ProjectModel.findById({ _id: id });
    }
  
    @Query(() => [Project])
    async returnAllProject() {
      console.log('hhhh')
    return await ProjectModel.find();
  }


    @Mutation(() => Project)
    async createProject(
      @Arg('data') { title, estimatedBudget, totalFte, fteAllocationRate, fundingDepartment, description, owner, createdOn, endDate, timeline, noOfFte, status }: ProjectInput
    ): Promise<Project> {
        console.log(title, description)
      const project = (
        await ProjectModel.create({
            title,
            estimatedBudget, 
            totalFte,
            fteAllocationRate, 
            fundingDepartment,
            description, 
            owner, 
            createdOn,
            endDate, 
            timeline, 
            noOfFte, 
            status
        })
      ).save();
      return project;
    }

    @Mutation(() => Boolean)
    async deleteProject(@Arg('id') id: string) {
      await ProjectModel.deleteOne({ id });
      return true;
    }

    
}