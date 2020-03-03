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

    //Client
    //5:30







