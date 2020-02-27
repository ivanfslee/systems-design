//Key Terms
    //Process
        //A program currently running on a machine/
        //In a sufficiently large system, you should assume that a process
        //may get terminated at any time 

    //Server
        //A machine or process that provides data/service for a client.
        //Typically by listening for incoming network calls/requests.

        //A single machine or piece of software can be both a client and a server at the same time
        //E.g. single machine can be a server for end users and as a client for a database

    //Node/Instance/Host
        //These three terms refer to the same thing most of the time. 
            //A virtual or physical machine on which the developer runs processes
            //Sometimes, the word 'server' also refers to this concept as well.

    //Availability
        //The likelihood/odds of a particular server or service being up and running at any point in time. 
        //Typically measured in percentages.
        //A server that has 99% availability will be operational 99% of the time
        //This would be said to have 'two nines' of availability

    //High Availability
        //Used to describe systems/service that have high level of availability - usually '5 nines' or more. (99.999%)
        //Sometimes abbreviated 'HA'

    //Nines
        //Refers to percentages of uptime 
            //99% - two nines - 97 hours of downtime per year
            //99.9% - three nines - 8.7 hours of downtime per year
            //99.99% - 4 nines - 52 minutes of downtime a year
            //99.999% - 5 nines - 5 minutes of downtime per year 

    //Redundancy
        //Process of replicating parts of a system in order to reduce downtime and increase reliability

    //SLA
        //'Service-level agreement'
        //SLA is a collection of guarantees given to a customer by a service provider
        //SLAs usually make guarantees on a system's availability, amongst other things
        //SLAs are made up of one or multiple SLOs (service-level objectives)

    //SLO
        //'service-level objective'
        //A guarantee given to a customer by a service provider. 
        //SLOs usually make guarantees on a systems availability, amongst other things 
        //SLAs are made up of SLOs

//Availability - how resistant a system is to failure and downtime
    //If database fails, is your system still going to be operational?
    //Often described as your system's 'fault tolerance'

    //Another way to think of availability:
        //Percentage of time in a certain time period, that all of the system's primary functions are satisfied and operational

    //Algoexpert Availability
        //You buy a subscription 
        //You expect algoexpert to be up and available 
    
        //As systems designers - availability matters because downtime loses customers/bad publicity/ etc 

    //Varying degrees of availability
        //Algoexpert downtime 
            //If it goes down, it isnt the end of the world

        //Airplane software - if it goes down - really really bad 
            //This type of system is expected to have very very high availability
        
        //Youtube - if it goes down
            //That's bad because alot of people view videos on their platform 

        //Google Cloud platform
            //If it goes down, that would effect customers that rely on their services
        
    //Availability is important - so how do we measure it?
        //We measure based on percentage of a system's uptime in a given year 

        //e.g. 90% availability means 35-36 days of downtime per year

        //55.5555555% ('nine fives') of availability = 162.33 days of downtime per year 

        //Nines
            //99% availability = '2 nines' of availability = down 3.65 days per year (bad, almost unacceptable)
            //99.9% = three nines 
            //99.99% = 4 nines 
            //99.999% = five nines = 5.26 minutes of downtime per year //the gold standard for availability
                //five nines = 'High Availability' , abbreviated as 'HA'
            
    //Many service providers have 'SLA'
        //SLA - agreement between service provider and the customer (end user) 
            //agreement on that systems availability (amongst other things)
            //Explicitly tell customers of a guaranteed amount of availability
        
            //e.g. cloud spanner SLA - google cloud product 
                //99.999% 
                //99.99%
                //If they fail to reach those SLO's
                //They will pay back customers a percentage of the monthly bill 

        //SLO - service level objective 
            //components of an SLA
        
    //Depending on your needs, you may need a certain threshold of availability

    //It's not always required to have five nines of availability
        //To achieve 5 nines requires some tradeoffs and is non-trivial to ensure High Availability
            //sometimes, higher latencies and lower throughput 
            //As the systems designer, you have to decide 
            //if your system needs HA and if it is worth the tradeoffs
            //You need to know which specific parts of your system need to be highly available
            //and which don't need to be 
        
        //Stripe on algoexpert
            //all payments that don't use paypal are using stripe 
            //Stripe - core service of handling payments should be highly available
                //but other parts like their dashboard to monitor their sales - is not as critical
                //if the dashboard goes down, its not the end of the world
                //core functionality of stripe with handling payments is still okay
        
        //Take home point - As a systems designer, What parts of my system need high availability and which ones don't?
            //What parts of my system would be 'okay' if they failed
        
    //How to improve the availability of a system?
        //You want to make sure your system does not have single points of failure
        //These points, if they fail cause your entire system to fail 

        //How to eliminate single points of failure?
            //With redundancy
                //The act of duplicating/triplicating/multiplying certain parts of your system

                //clients -> multiple load balancers -> multiple servers -> database

                //Algoexpert has 5 load balancers to monitor and forward traffic to their servers 


            //Passive redundancy
                //e.g. multiple servers / multiple load balancers 
                //having multiple components in a layer - where any component that fails, the other components are able to continue running smoothly
                
                //another example of passive redundancy
                //airplanes - twin engine airplane 
                    //if one engine fails, the airplane can still fly and land 
            
            //Active redundancy 
                //you have multiple machines that work together in such a way that 
                //only one or a few of the machines will be handling the work load
                //If a machine that is handling work, fails, 
                //the other machines will know and will take over 