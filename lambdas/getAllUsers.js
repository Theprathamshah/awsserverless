const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = 'productGroupTableDev';

exports.handler = async (event) => {
    console.log('Events', event);

    const params = {
        TableName: tableName
    };

    try {
        const data = await dynamoDb.scan(params).promise();
        return {
            statusCode: 200,
            body: {
                message: 'All users retrieved successfully!',
                data: data.Items
            }
        }
    } catch (error) {
        console.error('DynamoDB error: ', error);
        return { body: { message: 'Internal Server Error', error } };
    }
};
