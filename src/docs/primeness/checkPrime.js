module.exports = {
    // method of operation
    get: {
      tags: ["Prime Number Operations"], // operation's tag.
      description: "Check if number is prime or not", // operation's desc.
      operationId: "checkPrime", // unique operation id.
      parameters: [{
        name: "number", // name of param
        in: "path", // location of param
        required: true, // mandatory
        description: "Number for which to check primeness", // param desc
      }], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "True or false if number is prime", // response desc.
          
        },
      },
    },
  };