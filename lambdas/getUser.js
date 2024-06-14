//Lambda Learning 


// const Responses = require("./API_Responses")
// exports.handler = async (event) => {
//     console.log('Events', event);

//     if (!event.pathParameters || !event.pathParameters.ID) {
//         //failed without id
//         return {
//             statusCode: 400,
//             body: JSON.stringify(
//                 {
//                     message: 'Please pass the id',
//                     input: event.pathParameters.ID,
//                 },
//                 null,
//                 2
//             ),
//         };
//     }
//     let ID = event.pathParameters.ID;

//     if (data[ID]) {
//         // return the data with id
//         return {
//             statusCode: 200,
//             body: JSON.stringify(
//                 {
//                     message: 'User found!!',
//                     input: event.pathParameters.ID,
//                     data: data[ID],
//                 },

//             )
//         }

//     }
//     return  {
//         statusCode: 400,
//         body: JSON.stringify(
//             {
//                 message: 'Please pass the id',
//                 input: event.pathParameters.ID,
//             },
//             null,
//             2
//         ),
//     };
//     // failed as id not found
// }


// const data = {
//     1234: { name: "Anna Jones", age: 23, job: 'Journalist' },
//     7543: { name: "Pratham Shah", age: 52, job: "teacjer" },
//     5132: {name:"Tom Hague",age:34,job:"cab driver"}
// }



// const AWS = require('aws-sdk');
// const Responses = require('./API_Responses');  // Assuming you have a module for API responses

// const dynamoDb = new AWS.DynamoDB.DocumentClient();
// const tableName = 'productGroupTableDev';

// exports.handler = async (event) => {
//     console.log('Events', event);

//     if (!event.pathParameters || !event.pathParameters.ID) {
//         return Responses._400({ message: 'Please pass the id' });
//     }

//     let ID = event.pathParameters.ID;

//     const params = {
//         TableName: tableName,
//         Key: { ID }
//     };

//     try {
//         const data = await dynamoDb.get(params).promise();

//         if (data.Item) {
//             return {
//                 statusCode: 200,
//                 body:JSON.stringify(data)
//             }
//         } else {
//             return Responses._404({ message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('DynamoDB error: ', error);
//         return {
//             statusCode: 500,
//             body: {
//                 message:"Something went wrong please try again"
//             }
//         }
//     }
// };

// Fetching Users using AWS V3 dependency

import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'Please pass the id' });
    }
    const id = event.pathParameters.ID;
    const command = new GetCommand({
        TableName: "productGroupTableDev",
        Key: {
            ID:id
        }
    })
    const {Item} = await docClient.send(command);
    console.log(Item);
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Item),
    };
}