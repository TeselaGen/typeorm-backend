import { GraphQLFieldConfig } from 'graphql';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AbstractGraphQLQuery, GraphQLContext, Query } from '../../lib/graphql';
// import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { userCursorResult } from '../resultTypes/userCursorResult';
import { UserCustorResultModel } from '../resultModels/UserCustorResult';
import cursorFilterType from '../types/cursorFilterType';

// import { UserType } from '../types/UserType';

// import { GraphQLJSON } from 'graphql-type-json';

@Query()
export class usersQuery extends AbstractGraphQLQuery<GraphQLContext<any, any>, UserCustorResultModel, any> implements GraphQLFieldConfig {
    public type = userCursorResult;
    public allow = [];
    public args = {
        filter: {
            type: cursorFilterType,
            description: "filtro de la wea",
            required: true
        }
    };


    constructor(
        private userService: UserService,
        @Logger(__filename) private log: LoggerInterface
    ) {
        super();
    }

    public async run(root: any, args: any, context: GraphQLContext<any, any>): Promise<UserCustorResultModel> {
        const users = await this.userService.find();
        this.log.info(`Found ${users.length} users`);
        return {
            totalResults: 1,
            results: []
        };
    }

}
