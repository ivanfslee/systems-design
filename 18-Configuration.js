//Key Term
    //JSON
        //A file format heavily used in APIs and configuration. 
        //Stands for 'JavaScript Object Notation'

        //e.g. 
        //{
            //'version': 1.0,
            //'name': 'AlgoExpert Configuration'
        //}

    //YAML
        //A file format mostly used in configuration. 
        //Example:
            //version: 1.0
            //name: AlgoExpert Configuration

    //Key-Value Store
        //A flexible NoSQL database that is often used for caching and dynamic configuration.
        //Popular options include DynamoDB, Etcd, Redis, and ZooKeeper

    //Configuration
        //A set of parameters or constants that are critical to a system.
        //Configuration is typically written in JSON or YAML
        //And can be 'static' - meaning it is hard-coded in and shipped with your systems application code (like frontend code for example)
        //Or it can be 'dynamic' - meanint that it lives outside of your system's application code.

//A simple part of systems design but often overlooked
//Most large scale distributed systems will rely on configurations

//What is config
    //A set of parameters/ constants that your system or application will use
    //But instead of having these constants being embedded in your code
    //You will write/configure them in a seemingly isolated file

    //Typically config is written in JSON or YAML
        //This makes it easy to edit regardless of the language of your underlying application
    
    //Typically config files are named - 'config.json' / 'config.yaml'


    //Very simply, you can think of config as the set of constants you use in your application
        //This is why config is often overlooked.
        //As it seems so simple at face value.

    //JSON vs YAML 
        //Depends on the team/company and what you prefer
        //Uber used YAML
        //Google - used either, depending on the team/product you are on
        //Algoexpert uses JSON

    //Sample config file JSON:

// {
//     "apiKey": "absdfsdf_dlfjd",  (use config to store apiKeys)
//     "showSystemsExpert": false,  (use config to show if new feature is visible or not)
//     "supportedLanguages": [      (define programming languages they support on the platform)
//         "cpp",
//         "csharp",
//         "go",
//         "java",
//         "javascript",
//         "python",
//         "swift"
//     ],
//     "version": {                 (define version of their application)
//         "number": 0,
//         "releaseDate": "2020-02-20"
//     }
// }


    //Sample config file YAML:

// apiKey: aldfjlsdfj
// showSystemsExpert: false
// supportedLanguages:
// - cpp
// - csharp
// - go
// - java
// - javascript
// - python
// -swift
// version:
//  number: 0
//  releaseDate: '2020-02-20'


//Two primary types of configuration
    //1. Static configuration

    //2. Dynamic configuration