// Fetch all user using aws ask 2

// const AWS = require('aws-sdk');

// const dynamoDb = new AWS.DynamoDB.DocumentClient();
// const tableName = 'productGroupTableDev';

// exports.handler = async (event) => {
//     console.log('Events', event);

//     const params = {
//         TableName: tableName
//     };

//     try {
//         const data = await dynamoDb.scan(params).promise();
//         return {
//             statusCode: 200,
//             body: {
//                 message: 'All users retrieved successfully!',
//                 data: data.Items
//             }
//         }
//     } catch (error) {
//         console.error('DynamoDB error: ', error);
//         return { body: { message: 'Internal Server Error', error } };
//     }
// };



//~ Fetch all user using aws-sdk 3 !!

import {DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient,ScanCommand} from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
    const command = new ScanCommand({
        TableName: "productGroupTableDev",
    })
    const {Items} = await docClient.send(command);

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Items),
    }
    

}