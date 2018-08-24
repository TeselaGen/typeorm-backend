import {
    // GraphQLFieldConfigMap, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString,
    // GraphQLInt,
    // GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString
} from "graphql";

// import { GraphQLObjectType } from 'graphql';
// import { GraphQLJSON } from 'graphql-type-json';


// export default new GraphQLObjectType({
//     name: 'JSON',
//     fields: {
//       myField: { type: GraphQLJSON },
//     },
//   });

export default new GraphQLInputObjectType({
    name: "ArticleInput",
    fields: () => ({
        body: { type: GraphQLString }
    })
});
