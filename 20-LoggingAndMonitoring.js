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

