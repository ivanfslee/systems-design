//Key Terms
    //Availability
        //The odds of a particular server being up and running at any point in time, 
        //usually measured in percentages.
        //A server that has 99% availability will be operational 99% of the time 
        //This would be described as having two nines of availability

    //Key-Value Store
        //A key-value store is a flexible NoSQL database that's often used for caching
        //and dynamic configuration
        //Popular options include DynamoDB, Etcd, Redis, and ZooKeeper.

    //Rate Limiting
        //The act of limiting the number of requests sent to or from a system.
        //Rate limiting is most often used to the limit the number of incoming requests
        //in order to prevent DoS attacks and can be enforced at the IP-address level
        //at the uder-account level, or at the region level.

        // Rate limiting can also be implemented in tiers; for example
        //a type of network request could be limited to 1 per second, 
        //5 per 10 seconds, 
        //and 10 per minute/

    // DoS Attack
        //Short for 'denial-of service attack', 
        //A DoS attack is an attack in which a malicious user tries to bring down or 
        //damage a system in order to render it unavailable to users.
        //Much of the time, it consists of flooding it with traffic. 
        //Some DoS attacks are easily preventable with rate limiting, while others
        //can be far trickier to defend against.

    //DDoS Attack
        //Short for 'distributed denial-of-service attack'
        //A DDoS attack is a DoS attack in which the traffic flooding the target system
        //comes from many different sources (like thousands of machines), 
        //making it much harder to defend against.

    //Redis
        //An in-memory key-value store. 
        //Does offer some persistent storage options but is typically used as a 
        //really fast, best-effort, caching solution. 
        //Redis is also often used to implement rate limiting.

        //https://redis.io/

//Rate Limiting
    //Rate limiting has certain Security and Performance ramifications

    //Setting some type of threshold on certain operations past which, these operations will return errors
    //Limiting the amount of operations that can be performed in a given amount of time

    //Simple system example:
        //client -> server -> database
        //I only want to allow 2 requests per second from the client

        //On the third request within 10 seconds, server will return an error
        //If client keeps on sending a request within 10 sec, 
        //server will return error

    //The importance of rate limiting:
        //Without rate limiting, you run the risk of your system being brought down
        //due to malicious actors

        //DoS - denial of service attack
            //flooding a system with a bunch of traffic
            //The system cant handle it 
            //System doesn't have enough throughput to handle all that traffic

            //Rate limiting can prevent that from happening
                //Rate limiting will protect you from getting flooded with requests

                //Past a certain threshold, the server won't process the request and will
                //just return errors
        
    //Code Execution on Algo Expert:
        //They have some rate limiting in place to prevent users from spamming the code execution engine
        //They dont want people to abuse their system
    
    //Other use cases:
        //Issuing requests to get a web page , is also an opportunity to rate limit

    //You can rate limit based on certain parameters:
        //Rate limit a particular users 

        //Rate limit via ip address

        //Rate limit via region 

        //Rate limit via the number of requests - 
            //e.g. we don't want our server processing more than 10,000 requests
                //any more than that and we will return errors

    //If your system becomes the victim of a DDoS attack:
        //rate limiting may not solve your problem
        //Things get a lot more complicated

        //DDos has a bunch of different machines that might not be identifiable as 
            //part of the same organization/group

            //and have all those machines inundate your machine with traffic
        
        //It becomes much harder to rate limit
    
    //6:23 coding example