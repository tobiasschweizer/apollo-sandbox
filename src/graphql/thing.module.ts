import {Module} from "@nestjs/common";
import {ThingResolver} from "./thing.resolver";

@Module({
    providers: [ThingResolver]
})
export class ThingModule {}
