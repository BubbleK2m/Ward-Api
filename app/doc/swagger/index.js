const account = require('./account');
const user = require('./user');

const docs = [
    account,
    user
];

const swagger = {
    swagger: "2.0",
    
    info: {
        description: "'와드'의 API 문서",
        version: "1.0.0",
        title: "Swagger Petstore",
        termsOfService: "http://swagger.io/terms/",

        contact: {
            email: "apiteam@swagger.io"
        },

        license: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },

    host: "ward-api.com",
    basePath: "/",
    
    tags: [
        {
            name: "계정",
            description: "계정 관련 api"
        },
        {
            name: "사용자",
            description: "사용자 관련 api"
        },
        {
            name: "학교",
            description: "학교 관련 api"
        }
    ],

    schemes: [
      "https"
    ],

    paths: {}
};

for(let doc of docs) {
    for (let key of Object.keys(doc)) {
        let spec = doc[key];
        let { method, path } = spec;
        
        delete spec.method;
        delete spec.path;
        
        if (!swagger.paths[path]) swagger.paths[path] = {}; 
        swagger.paths[path][method] = spec;
    }  
}

module.exports = swagger;
