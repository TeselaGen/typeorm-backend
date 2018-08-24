import { GraphQLFieldConfig, GraphQLString } from 'graphql';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AbstractGraphQLQuery, GraphQLContext, Query } from '../../lib/graphql';
import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { UserType } from '../types/UserType';

@Query()
export class userQuery extends AbstractGraphQLQuery<GraphQLContext<any, any>, User, any> implements GraphQLFieldConfig {
    public type = UserType;
    public allow = {};
    public args = {
        id: {
            type: GraphQLString!,
            description: "id de la wea",
            required: true
        }
    };

    constructor(
        private userService: UserService,
        @Logger(__filename) private log: LoggerInterface
    ) {
        super();
    }

    public async run(root: any, args: any, context: GraphQLContext<any, any>): Promise<User> {
        const user = await this.userService.findOne(args.id);
        this.log.info(`Found user`,user);
        return user;
    }

}
