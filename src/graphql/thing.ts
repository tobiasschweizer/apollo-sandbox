import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType('Thing')
export class Thing {
    @Field()
    name: string = 'test';
}
