//Key Terms 
    //Load Balancer
        //Type of reverse proxy that distributes traffic across multiple servers
        //Load balancers can be found in many parts of a system 
        //From DNS layer all the way to the database layer

    //Server-Selection Strategy
        //How a load balancer chooses servers distributing traffic amongst multiple servers

        //Commonly used strategies include:
            //round-robin
            //random selection
            //performance-based selection
                //choosing the server with the best performance metrics, like the fastest response time 
                //or least amount of traffic 
            //IP-based routing
    //Hot Spot 
        //When distributing workload across a set of servers
        //the workload might be spread unevenly
        //This can happen if your sharding key or your hashing function are suboptimal
        //or if your workload is naturally skewed
        //Some servers will receive a lot more traffic than others
        //thus creating a 'hot spot'

    //Nginx
        //Specific piece of technology/product 
        //Popular web server that is often used as a reverse proxy and load balancer

//Load Balancers
    //Most likely will use load balancer in all your systems design interviews

    //Multiple clients
    //Client -> Load Balancer -> Server
    //Client
    //Client 

    //Some clients might be issuing multiple requests to the server 

    //In this example, we won't worry about the server's responses back to the client

    //Our single server has limited resources and can only handle a limited amount of requests in a certain time period
    //Our system has limited throughput 

    //The more requests that are sent from one client or multiple clients to our server
    //The more likely it is that our server becomes overloaded with more requests than it could handle
    //Which may lead to a failure of the system or the system becomes really slow
    
    //How to resolve this?
        //We scale the system
            //Vertically - increase the power of our server (this will be limited)

            //Horizontally - add more servers 
        
    //Let's say we add more 3 more servers 
    //The system can then process roughly 4 times the amount of requests
    //But only if the requests are distributed equally amongst the servers 

    //How to ensure this balanced distribution from the clients to the servers?
        //Usage of a load balancer 

    //Load Balancer - server that sits between clients and servers 
        //Job is to balance workload across resources 
        //In this example, job is rerouting traffic in the form of client requests to the servers in a balanced/preconfiguired way

    //All Client requests route to Load Balancer
    //Load Balancer will reroute client requests to servers in a balanced/preconfiguired way

    //Client                     Server 
    //Client -> Load Balancer -> Server
    //Client                     Server

    //Advantages:
        //Throughput of system increases - underutilized servers can do their job better
        //Latency is lower
        //Better uses of resources - new servers added can process requests given to them from the load balancer
    
    //Most of the time you can think of the load balancer as a reverse proxy
        //Because LB sit in between client and server 
        //And LB act on behalf of the servers 

    //Load Balancers can act on different layers of your system
        //1. Between Client and Server
        //2. Between Server and databases
        //3. LB at the DNS layer - DNS query is made - DNS round-robin technique 
            //DNS round-robin - A type of load balancing that occurs at the DNS layer 
                //A single domain name gets multiple ip addresses
                //When a dns query is made to the domain name
                //The ip address that is returned, will be made in a load balanced way
    
    //How does the Load Balancer distribute the load?
        //Different types of Load Balancers - both are pretty different from one another 
            //Software LB - you can do more with software LB such as customization and scaling
            //Hardware LB - physical machines dedicated to load balancing - you are limited by the hardware you are given with hardware load balancers
    
    //We will focus on Software LB
    
    //How does LB know about the amount of servers?
        //Server-Selection Strategy

        //The servers connected to the load balancer are configuired by those in charge of the system
        //Registering/deregistering servers to the LB

        //How does LB distributing work?
            //Randomly - you can configuire your LB to redirect all traffic to your servers in a random order
                //Could cause problems because one server by chance could get overloaded
            
            //Round-Robin approach - goes through all servers in order and then it repeats that order
                //Sort of gurantees an even distribution of traffic across your servers
            
            //Weighted Round Robin - you would have an order of servers
                //but each server is weighted differently
                //A particular server could be redirected more traffic than others if it is weighted a little more higher
                //You may want to do this if one of your servers is more powerful than the others
                //So you want to route more traffic to that particular server since it can handle more requests 
            
            //Performance/Load monitoring approach
                //Load Balancer assesses a 'load check' on your servers to see how many requests your servers are handling 
                    //How much traffic a server is handling
                    //How long a server is taking to respond to requests
                    //How much resources a server is using 

                    //Based on some criteria, LB will route requests accordingly 

                    //e.g. LB sees that a particular server is handling traffic really well, whereas other servers are being overloaded
                        //LB will then route more traffic to that server
            
            //IP based server selection strategy
                //When LB gets ip address of the client, it will hash the ip address
                //depending on the hash value, it will redirect to particular server

                //Useful, if you are caching the results of the requests in your servers
                //Then the response is cached as well and the server can serve it up to client more quickly

                //Can help to maximize your cache hits 
                //You may have cached the clients request in the server before hand
                //So when that same client requests again, the load balancer can route the request to the 
                //same server that cached the clients request before

            //Path based server selection strategy
                //LB distributes requests to servers according to the path of the request
                //They use this on algoexpert

                //They distribute requests to some servers according to their path
                //All requests involving running code will be redirected to a specific server/set of servers
                //All requests involving payments will be redirected to a specific server/set of servers

                //Useful because if they want to deploy a big change to their code execution engine
                //The deployment will only affect the servers handling the code execution 

                //The requests involving payment will still route to their specific server/set of servers

                //Also, if code execution server starts dying, the other services on the website will remain unaffected

            //Thus, there are alot of server-selection strategies that your LB can use 

            //You need to pick according to your use case
            //When you are designing your system, you may want to use multiple load balancers that use different server selection strategies

            //e.g. different server selections strats
                //IP address server selection             Round-Robin 
                //        |                                  | 
                //Clients -> Load Balancer -> Load Balancers -> Servers 


            //LB's can get overloaded as well, so you can have multiple load balancers in one layer as well, to they can redistribute requests amongst themselves as well
                // clients -> load balancers -> load balancers -> servers

            //LBs are critical for large-scale systems
            //You will most likely be using them in your systems design interviews