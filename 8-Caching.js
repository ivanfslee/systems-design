//Key Terms
    //Cache
        //A piece of hardware or software that stores data
        //Typically meant to retrieve that data faster than otherwise

        //Caches often used to store responses to network requests as well as 
        //results of computationally-long/intensive operations

        //Note that the data in a cache can become 'stale' if the main source 
        //of truth for that data (e.g. the main database behind the cache)
        //gets updated and the cache doesnt
        
    //Cache Hit
        //When requested data is found in a cache

    //Cache Miss
        //When requested data could've been found in a cache but isn't.
        //Typically used to refer to a negative consequence of a system failure or a poor design choice. 

        //e.g. If a server goes down, our load balancer will have to forward requests to a new server
            //which will result in cache misses

    //Cache Eviction Policy
        //The policy/criterira by which values get evicted or removed from a cache. 

        //Common cache eviction policies include:
            //LRU - least-recently used
            //FIFO - first-in-first-out
            //LFU - least-frequently used

    //Content Delivery Network
        //Third-party service that acts like a cache for your servers
        //Sometimes web apps can be slow for users in a certain region if the servers are located in a another region

        //A CDN has servers all around the world
        //Which means latency to a CDN's servers will more likely be far better than latency to your servers 

        //Two most popular CDNs are Cloudflare and Google Cloud CDN

//Caching is so important
    //You will most likely be using caching in all or almost all of your sytems interviews

    //Recall - coding interviews
        //Caching is present in alot of algorithms
            //purpose: to avoid redoing computationally complex/intensive operations
            //Using caching then, speeds up our algorithm
    
    //Caching in systems design is used similarly
        //Caching is used to speed up a system
        //Caching is used to reduce or improve the latency of a system

        //Recall - latency 
            //different operations take different times 
            //We will design the system in such a way where those network requests 

            //caching is storing data in a location where it originally is 
            //such that it is faster to access this data in this newer location
            //rather than making the network request/operation that would increase latency 
        
        //Using caching at different levels of a system
            //Caching at the client level
                //Perhaps the client caches a value that it doesnt need to get from the server

            //Caching at the server level
                //Maybe you always need the client to interact with the server
                //but you don't need the server to always interact with the database
                //to retrieve data 
                //Maybe server needs to go to the database once and can cache some values

            //You could have caching at the hardware level
                //This is less important for systems design interviews 
                //But still good to know
                
                //For example
                //CPU caches - live at the cpu level
                    //Which make it faster to retrieve values from memory
        
        //Concrete instances of caching
            //You are doing a lot of network requests, but you want to avoid doing a bunch of network requests

            //Situation:
                //Client makes request to -> server 
                //Server makes request to -> database

                //Database sends back response to -> server
                //Server sends back response to -> client
                //CLient able to do stuff with data it requested 

                //In order to avoid doing that network request again to the database, it can be cached
                //Accomplished by having the client or server cache that value from the database request

            //Another situation:
            //Caching to avoid redoing a computationally long/intensive operation
            
