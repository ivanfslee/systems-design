//Key Terms
    //JSON

    //Logging
        //The act of collecting and storing logs --useful information about events in your system.
        //Typically your programs will output log messages to its STDOUT or STDERR pipes,
        //which will automatically get aggregated into a 'centralized logging solution'

    //Monitoring
        //The process of having visibility into a system's key metrics
        //Monitoring is typically implemented by collecting important events
        //in a system and aggregating them in human-readable charts
    
    //Alerting
        //The process through which system administrators get notified when critical system issues occur.
        //Alerting can be set up by defining specific thresholds on monitoring charts, past which
        //alerts are sent to a communication channel like slack

//Logging and Monitoring
    //2 concepts in systems design - very important but is fairly straight forward and sometimes overlooked
        //especially as your system gets larger and larger and supports more users

    //e.g. Algoexpert
        //You are providing a service. 
        //Customer purchases a subscription.
        //They contact you and say their card got charged.
        //And they don't have access to the product.

        //You (the owner) may be thinking, how does that happen
        //This hasn't happened before. We have tons of users

        //We're not sure how to reproduce this.
        //We can't tell the customer, to try and repurchase the product. 

        //We have no real visibility in seeing what caused the issue.

        //This does seem like an edge case issue that comes up every so often
        
        //How to go about debugging this?

        //This is where logging comes in
    
    //Logging

        //Recall that when developing, you may use console.log statements with javascript
        //or print statements with python

        //If you had access to logs of that users behavior
        //That would help

        //In the context of systems design
            //'logging' refers to literally logging stuff in your code
            //but we're also referring to a system/service component
            //that will collect all your logs and store them in some kind of database
            //so you can go to that database

            //You look through the logs at a later time in order to debug that issue
        
        //In practice, when you are developing your app
            //You will put into the code, things like:
                //errors
                //important operations
                //requests your users are doing

            //2 popular formats of logs:
                //syslog
                //JSON

            //You will have a service that collects these logs
                //and stores them in some database
            
            //Algoexpert uses google stack driver
                //to store their logs
            
            //Then when user comes to you with a problem
                //you look through your logs around the time they purchased your product
                //to try to debug the users problem
                //by looking through their actions 
                //and see what may have gone wrong
            
            //Logging is simple but is what allows you to debug issues
                //when you are dealing with users/problems at scale
            
            //Typically if you are working at a large company
                //or a company that has rigorous engineering practices
                //in place
                //you will have to have logs in your system
    
    //Monitoring
        //tool or thing that makes managing a system alot easier
        //and alot better

        //As your system grows, you need 
            //visibility into your systems health , performance, general status

        //by making sure you design your system to gather meaningful metrics 
        //and that you have tools to monitor those metrics

        // As algoexpert grows, you may get more and more users

        //Are users getting more and more errors?

        //Are users getting latency issues?

        //Sales over time?

        //What authentication service are your users using?

        //Facebook auth/google auth/email auth most popular?

        //These analytics will give you insights in maintaining and growing the platform

        //In the context of systems design and interviews
            //Monitoring involves making sure, in your system you've got important monitoring
                //in play to measure and see important metrics of your system

        //Getting metrics
            //Pre-built tool or something you implement yourself
            //that scrapes your logs
            //Provided that you have robust logs in place already
            //and create metrics from those logs

            //Keep in mind:
                //You need logging information and you are limited by your logging info

                //You need to make sure that your logs contain information that you want visibility over

                //e.g. latency of specific requests in your system
                    //So you need to make sure your logs keep track of latency of those requests
                
                //Another limitation:
                    //If you ever decide to change your logs
                    //You risk breaking your metrics/monitoring system

            //Time series database
                //Another way to gather metrics 
                //Specialized database specifically tailored for data that is related to time/ data measured over time

                //Popular time series db's include:
                    //Prometheus (what they use on algoexpert)
                    //graphite
                    //influx db

                //Use these specialized db and you have your servers send metrics periodically
                    //to these databases
                
                //Then you query the time series database 
                    //or use tools to make graphs from the time series data
                
            //Alerting:
                //With monitoring in place
                //You want this monitoring to be useful for you
                
                //If you are looking at error rates, you want to be alerted when these errors
                    //are at a point that you deem unacceptable

                //You can hook up your monitoring system to a chat app like slack

                //e.g. the average run time of your last 100 code runs was 2 seconds
                    //this is abnormal, check it out
                
                //Having a great alert system can go hand in hand with a good monitoring system

            //In the beginning of your system when there is not much activity, logging and monitoring may not be as important

            //But as your system gets larger and it grows, logging and monitoring becomes extremely important

            //In the context of systems design interview, logging and monitoring are great tools to improve the polish of your system