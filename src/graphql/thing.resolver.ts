import {Thing} from "./thing";
import {Query, Resolver} from "@nestjs/graphql";

@Resolver((of: any) => Thing)
export class ThingResolver {

    @Query((of: any) => Thing)
    async getThing() {
        return Promise.resolve(new Thing());
    }

}
