'use strict';

const Joi = require('joi');

const resultHTTPStatus = {
    '200': {
        'description': 'Success'
    },
    '400': {
        'description': 'Bad Request'
    },
    '404': {
        'description': 'Sum not found'
    },
    '500': {
        'description': 'Internal Server Error'
    }
};

module.exports = [{
        method: 'GET',
        path: '/sum/add/{a}/{b}',
        config: {
            handler: function add(request, reply) {
                reply({
                    'sum': "lets do it tomorrow :P"
                })
            },
            description: 'Add',
            tags: ['api', 'reduced'],
            notes: ['Adds together two numbers and return the result. As an option you can have the result return as a binary number.'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            }
        }
    }
    //, {
    //     method: 'GET',
    //     path: '/hostinfo',
    //     config: {
    //         handler: Handlers.hostinfo
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/reduced',
    //     config: {
    //         handler: Handlers.reduced
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/license',
    //     config: {
    //         handler: Handlers.license
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/images/{file*}',
    //     handler: {
    //         directory: {
    //             path: './node_modules/hapi-swagger/public/swaggerui/images'
    //         }
    //     }
    // }, {
    //     method: 'PUT',
    //     path: '/sum/add/{a}/{b}',
    //     config: {
    //         handler: Handlers.add,
    //         description: 'Add',
    //         tags: ['api', 'reduced'],
    //         notes: ['Adds together two numbers and return the result. As an option you can have the result return as a binary number.'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: resultHTTPStatus
    //             }
    //         },
    //         validate: {
    //             params: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number')
    //             },
    //             headers: Joi.object({
    //                 'x-format': Joi.string()
    //                     .valid('decimal', 'binary')
    //                     .default('decimal')
    //                     .description('return result as decimal or binary')
    //             }).unknown()
    //         }
    //     }
    // }, {
    //     method: 'PUT',
    //     path: '/sum/subtract/{a}/{b}',
    //     config: {
    //         handler: Handlers.subtract,
    //         description: 'Subtract',
    //         notes: ['Subtracts the second number from the first and return the result'],
    //         tags: ['api'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: resultHTTPStatus
    //             }
    //         },
    //         validate: {
    //             params: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'PUT',
    //     path: '/sum/divide/{a}/{b}',
    //     config: {
    //         handler: Handlers.divide,
    //         description: 'Divide',
    //         notes: ['Divides the first number by the second and return the result'],
    //         tags: ['api'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: resultHTTPStatus
    //             }
    //         },
    //         validate: {
    //             params: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number - can NOT be 0'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number - can NOT be 0')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'PUT',
    //     path: '/sum/multiple/{a}/{b}',
    //     config: {
    //         handler: Handlers.multiple,
    //         description: 'Multiple',
    //         notes: ['Multiples the two numbers together and return the result'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: resultHTTPStatus
    //             }
    //         },
    //         tags: ['api'],
    //         validate: {
    //             params: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/store/',
    //     config: {
    //         handler: Handlers.storeList,
    //         description: 'List sums',
    //         notes: ['List the sums in the data store'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: listHTTPStatus
    //             }
    //         },
    //         tags: ['api', 'reduced', 'one'],
    //         validate: {
    //             query: {
    //                 page: Joi.number()
    //                     .description('the page number'),

    //                 pagesize: Joi.number()
    //                     .description('the number of items to a page')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/store/{id}',
    //     config: {
    //         handler: Handlers.storeItem,
    //         description: 'Get sum',
    //         notes: ['Get a sum from the store'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus
    //             }
    //         },
    //         tags: ['api', 'reduced', 'two'],
    //         validate: {
    //             params: {
    //                 id: Joi.string()
    //                     .required()
    //                     .description('the id of the sum in the store')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'POST',
    //     path: '/store/',
    //     config: {
    //         handler: Handlers.storeAdd,
    //         description: 'Add sum',
    //         notes: ['Adds a sum to the data store'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus,
    //                 payloadType: 'form',
    //                 nickname: 'storeit'
    //             }
    //         },
    //         tags: ['api', 'reduced', 'three'],
    //         validate: {
    //             payload: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number'),

    //                 operator: Joi.string()
    //                     .required()
    //                     .default('+')
    //                     .valid(['+', '-', '/', '*'])
    //                     .description('the opertator i.e. + - / or *'),

    //                 equals: Joi.number()
    //                     .required()
    //                     .description('the result of the sum')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'PUT',
    //     path: '/store/{id}',
    //     config: {
    //         handler: Handlers.storeUpdate,
    //         description: 'Update sum',
    //         notes: ['Update a sum in our data store'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus,
    //                 payloadType: 'form'
    //             }
    //         },
    //         tags: ['api'],
    //         validate: {
    //             params: {
    //                 id: Joi.string()
    //                     .required()
    //                     .description('the id of the sum in the store')
    //             },
    //             payload: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number'),

    //                 operator: Joi.string()
    //                     .required()
    //                     .default('+')
    //                     .valid(['+', '-', '/', '*'])
    //                     .description('the opertator i.e. + - / or *'),

    //                 equals: Joi.number()
    //                     .required()
    //                     .description('the result of the sum')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'DELETE',
    //     path: '/store/{id}',
    //     config: {
    //         handler: Handlers.storeRemove,
    //         description: 'Delete sums',
    //         notes: ['Delete a sums from the data store'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus
    //             }
    //         },
    //         tags: ['api'],
    //         validate: {
    //             params: {
    //                 id: Joi.string()
    //                     .required()
    //                     .description('the id of the sum in the store')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'POST',
    //     path: '/store/payload/',
    //     config: {
    //         handler: Handlers.storeAdd,
    //         description: 'Add sum, with JSON object',
    //         notes: ['Adds a sum to the data store, using JSON object in payload'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus
    //             }
    //         },
    //         tags: ['api', 'reduced', 'three'],
    //         validate: {
    //             payload: {
    //                 a: Joi.number()
    //                     .required()
    //                     .description('the first number'),

    //                 b: Joi.number()
    //                     .required()
    //                     .description('the second number'),

    //                 operator: Joi.string()
    //                     .required()
    //                     .default('+')
    //                     .valid(['+', '-', '/', '*'])
    //                     .description('the opertator i.e. + - / or *'),

    //                 equals: Joi.number()
    //                     .required()
    //                     .description('the result of the sum')
    //             }
    //         }
    //     }
    // }, {
    //     method: 'POST',
    //     path: '/store/list/',
    //     config: {
    //         handler: Handlers.storeAdd,
    //         description: 'Add sum, with JSON object',
    //         notes: ['Adds a sum to the data store, using JSON object in payload'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: sumHTTPStatus
    //             }
    //         },
    //         tags: ['api', 'reduced', 'three'],
    //         validate: {
    //             payload: listModel
    //         }
    //     }
    // }, {
    //     method: 'POST',
    //     path: '/store/file/',
    //     config: {
    //         handler: Handlers.storeAddFile,
    //         description: 'Add sum, with JSON file',
    //         notes: ['Adds a sum to the data store, using JSON object in a uploaded file'],
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: fileHTTPStatus,
    //                 payloadType: 'form'
    //             }
    //         },
    //         tags: ['api', 'reduced', 'three'],
    //         validate: {
    //             payload: {
    //                 file: Joi.any()
    //                     .meta({
    //                         swaggerType: 'file'
    //                     })
    //                     .required()
    //                     .description('json file with object containing: a, b, operator and equals')
    //             }
    //         },
    //         payload: {
    //             maxBytes: 1048576,
    //             parse: true,
    //             output: 'stream'
    //         }
    //     }
    // }, {
    //     method: 'GET',
    //     path: '/{path*}',
    //     handler: {
    //         directory: {
    //             path: './public',
    //             listing: false,
    //             index: true
    //         }
    //     }
    // }
];