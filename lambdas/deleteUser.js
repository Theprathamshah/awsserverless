import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Please enter valid id" }),
        }
    }

    const id = event.pathParameters.ID;
    const command = new DeleteCommand({
        TableName: 'productGroupTableDev',
        Key: {
            ID: id
        }
    })

    const response = await docClient.send(command);
    console.log(response);

    return {
        statusCode:200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
    };
}