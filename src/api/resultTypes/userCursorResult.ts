import {
    GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLObjectType
} from 'graphql';
import { UserType } from '../types/UserType'


const UserFields: GraphQLFieldConfigMap = {
    totalResults: {
        type: GraphQLInt,
        description: 'contaos los resultaos',
    },
    results: {
        type: GraphQLList(UserType),
        description: 'los resultaos de verda',
    }
};

export const userCursorResult = new GraphQLObjectType({
    name: 'userCursorResult',
    description: 'Resultaos de usuarios.',
    fields: () => ({ ...UserFields})
});