//Key Terms
    //Hashing Function
        //A function that takes in a specific data type (e.g. string or an identifier)
        //and outputs a number

        //Different inputs MAY result in the same output
        //but a good hash function will attempt to minimize those 
        //'hashing collisions' (which is the same as maximizing 'uniformity')

    //Load Balancer

    //Consistent Hashing
        //A type of hashing that minimizes the number of keys that need to be remapped when a hash 
        //table gets resized

        //Often used by load balancers to distribute traffic to servers
        //It minimizes the number of requests that get forwared to different servers
        //when new servers are added or when existing servers are brought down

    //Rendezvous Hashing 
        //A type of hashing also coined 'highest random weight' hashing
        //Allows for minimal re-distribution of mappings 
        //when a server goes down.

    //SHA
        //Secure Hash Algorithm
        //The SHA is a collection of cryptographic hash function used in the industry.
        //Today, SHA-3 is a popular choice to use in a system

//Hashing 
    //Action that transforms arbitrary data into a fixed-sized value usually an integer value
    
    //In the context of a systems design interview, the arbitrary piece of data can be:
        //ip address
        //username
        //http request
        //anything that can be hashed/transformed into an integer value 
    
    //Where does hashing come into play in a system?

        //C1                               Server A
        //C2                               Server B
        //      ->   Load Balancer  ->
        //C3                               Server C
        //C4                               Server D

        //Load balancer re routes the Client's request to the server
        //It uses some sort of server selection strategy to choose which server to reroute to
            //e.g. random selection/round-robin/
        
        //These server selection strategies are okay, but they can introduce some problems into the system
            //C1 to C4 are making computationally complex and high time complexity requests to the servers
                //You may address these expensive requests using caching
                //Have every server store an in-memory cache where every request when reaching a server
                //The server will check if the associated response to the request has been cached or not

                //If response hasnt been cached, server will do the complex calculation
                //If response has been cached, it skips the calculation, and returns the cached response 

                //This would be an acceptable way to design the system if your calculations were complex and high time complexity

                //If your LB is using random/round-robin, the caching won't work that well 
                //Because there's no guarantee that the LB using random/round-robin server selection
                //will route the clients request to the server that
                //has cached that client's request 
                //So you end up with EACH server doing the long computation request and caching it

                //Ideally you want the Load Balancer to reroute the clients request to the server that has cached the clients request

        //Hashing to the rescue
            //With hashing we can hash the requests that come into load balancer
            //Then, based on the hash, we can bucket the request according to the position of the servers

            //In this example:

                //C1                       
                //C2 
                //    -> Load Balancer -> Server A, B, C, D
                //C3
                //C4

                //We have 4 clients, 1 load balancer, 4 servers (A, B, C, D)
                //We will hash the client's names (C1, C2, C3, C4)
                //Our objective is to reroute all requests to the same server

                //After we pass the client's names into hashing function we get this:
                    //C1 -> 11
                    //C2 -> 12
                    //C3 -> 13
                    //C4 -> 14
                
                //Hash function transforms arbitrary data into fixed-size value, typically an integer value

                //We mod the hashed value by the total number of servers (4)
                    //11 % 4 (the number of servers) 

                    // 11 % 4 -> 3
                    // 12 % 4 -> 0
                    // 13 % 4 -> 1
                    // 14 % 4 -> 2

                    //Now, we can map those modded values to each of the 4 servers we have

                    //C1 -> Server 3 -> D
                    //C2 -> Server 0 -> A
                    //C3 -> Server 1 -> B
                    //C4 -> Server 2 -> C

                    //So, all of Client 1's requests will we rerouted to Server D
                    //Client 2's requests routed to Server A
                    //Client 3 routed to Server B
                    //Client 4 routed to Server C

                    //Note: When using a hashing function, important that the function has 'uniformity'
                        //Where the hash outputs evenly distributed data values 
                        //For example, we have 4 servers and 8 clients. A good hashing algorithm 
                        //would output values for each client such that each server gets routed 2 clients each
                        //In practice, you don't write your own hashing algos
                        //but use industry grade ones such as:
                            //SHA-1 hashing algo
                            //MD5 hashing algo
                            //https://en.wikipedia.org/wiki/List_of_hash_functions
                
                //Using hashing, we can evenly distribute the cached results in our servers
                //and route clients to their appropriate server and maximize cache hits

                //Another Problem:
                    //We are dealing with a large scale system
                    //Maybe requests increase
                    //And a server dies
                    //or we need to add a server, server E, the 5th server

                    //We can no longer modulo by number 4 because now we have 5 servers 
                    //If we keep on modding by 4, the incoming client requests will always
                    //only go to Server A, B, C, D and never to E
                
                //So if we add a 5th server, we have to modulo by 5 

                    //After we pass the client's names into hashing function we get this:
                        //C1 -> 11 -> 11 % 5 = 1 (when mod by 4 = 3)
                        //C2 -> 12 -> 12 % 5 = 2 (when mod by 4 = 0)
                        //C3 -> 13 -> 13 % 5 = 3 (when mod by 4 = 1)
                        //C4 -> 14 -> 14 % 5 = 4 (when mod by 4 = 2)
                        //C5 -> 15 -> 15 % 5 = 0 (when mod by 4 = 3)
                    
                    //So we can see that when we mod by a different number, our values are different
                    //which means the servers the client is routed to is different 

                    //Which means that the in-memory caches will all be incorrect as well
                    //Our previous cache hits will be cache misses

                    //So our strategy of hashing client names and modulo by the number of servers 
                    //is not a good strategy because servers may go down
                    //or additional servers may go up
                    //which nullifies any in-memory caches we may have had.
                    //These in-memory caches arent nearly as useful because the same client requests wont route to the same servers with the caches

                //So how do we address this?
                //What do we do when we add or remove a server?
                    //Solution is to use:
                        //Consistent Hashing
                        //Rendezvous Hashing 

//Consistent Hashing Strategy - 17
    //Imagine servers places on a circle in an evenly distributed way

        //Consistent Hashing:
        //A type of hashing that minimizes the number of keys that need to be remapped when a hash 
        //table gets resized

        //Often used by load balancers to distribute traffic to servers
        //It minimizes the number of requests that get forwared to different servers
        //when new servers are added or when existing servers are brought down


//Rendezvous Hashing
                





