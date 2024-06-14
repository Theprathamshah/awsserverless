import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import { PutCommand,DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {

    
    const body = JSON.parse(event.body);
    const command = new PutCommand({
        TableName: 'productGroupTableDev',
        Item: {
            ID: body.ID,
            name: body.name,
            age: body.age,
            occupation: body.occupation
        }
    });

    const response = await docClient.send(command);
    console.log(response);
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
    }
    // try {
    //     await dynamoDB.put(params).promise();
    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify({ message: 'Data inserted successfully' }),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ message: 'Failed to insert data', error: error.message }),
    //     };
    // }
}