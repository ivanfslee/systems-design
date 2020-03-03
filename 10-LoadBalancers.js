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