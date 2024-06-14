const AWS = require('aws-sdk')

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const params ={
        TableName: 'productGroupTableDev',
        Item: {
            ID: body.ID,
            name: body.name,
            age: body.age,
            occupation:body.occupation
        }
    }
    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data inserted successfully' }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to insert data', error: error.message }),
        };
    }
}