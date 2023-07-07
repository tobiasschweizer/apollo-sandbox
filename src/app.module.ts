import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ThingModule} from "./graphql/thing.module";
import {ApolloServerPluginLandingPageLocalDefault} from "@apollo/server/plugin/landingPage/default";

@Module({
  imports: [
      ThingModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: 'schema.gql',
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()]
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
