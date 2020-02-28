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