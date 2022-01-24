import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const Lob = require('lob')('test_9af0d8362ea593c6ab148868ab0abb5a8ef');

// const lobAPI = Lob;


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const res = await Lob.addresses.list();
        // .then((res) => {
        //     console.log(res.data);
        // })
        // .catch((e) => {
        //     console.log(e);
        // });
     
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    const responseMessage = name
        ? `Hello, ${name}. This HTTP triggered function executed successfully. Lob Data: ${JSON.stringify(res.data)}`
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;