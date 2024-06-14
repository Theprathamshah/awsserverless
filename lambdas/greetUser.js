exports.handler = async (event) => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return {
            statusCode: 400,
            body: JSON.stringify(
                {
                    message: 'Please pass the id',
                    input: event.pathParameters.ID,
                },
                null,
                2
            ),
        }

    }
    let ID = event.pathParameters.ID;

    // data.ID.name
    const name = data[ID].name;
    console.log(`your id is ${ID} and name is ${name}`);
    console.log(name);
    if (name) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, Have a good day ${name}`,
                
            })
        }
    }
}


const data = {
    1234: { name: "Anna Jones", age: 23, job: 'Journalist' },
    7543: { name: "Pratham Shah", age: 52, job: "teacjer" },
    5132: { name: "Tom Hague", age: 34, job: "cab driver" }
}