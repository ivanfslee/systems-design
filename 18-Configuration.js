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

//What is configuration?
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
        //Config that is bundled/packaged with your application code
        //If there are any changes to the config file
        //The entire application will have to go under a code review (typically with coworkers/peers) and will have to be redeployed

        //If anything breaks after the config change, you will have to fix it

        //Static config is safer in that, any changes will undergo thorough testing

        //Downside is that static config changes are slower to implement because you have to go through and test your application
            //and redeploy it afterwards, which is a timeconsuming process

            //It takes a bit longer to see any changes in config implemented in your application
        

    //2. Dynamic configuration
        //Config that is completely separated from your application

        //This means you can change your config at a moments notice
        //And your config will take effect immediately

        //Config will need to be backed by some kind of database that your application/system
            //will be querying to see what the current config is
        
        //Dynamic config provides a lot of flexibility

        //You can build a UI on top of your configuration
            //Allows you and your team to implement changes to your config with a click of a button on the UI
            //You wouldnt have to redeploy your entire application to see the changes in the config take effect

        //Pros - changes and see their effect/impact quickly
            //You can make and implement changes quickly
        
        //Cons - 
            //no tests
            //might be bad for your system as a whole

            //Large corporations will use dynamic configs, because they are alot of benefits
            //But they will build around it to make up for some of its deficits. 

            //You may build certain access controls to change the config
                //So that only certain individuals have access and are able to change it
            
            //You may build deployment systems around configurations
                //e.g. google - certain services used dynamic configs
                    //When making changes, not only would you go through a code review
                    //and you had to have access (you had to own the particular feature)

                    //The configuration would redeploy every 4 hours or so
                    //But the entire application would redeploy twice a week

                    //So you can make the config changes and see the results quickly

                    //Google also had it so that the changes might only roll out to a small percentage of users
                    //Thus, you can more safely roll out changes

                    //Dynamic configs requires great responsibility
                        //But you can build other complex systems around it to make up for its faults
                        //and to safeguard against those great risks/responsibilities

