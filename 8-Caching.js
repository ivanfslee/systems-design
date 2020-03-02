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

            //Situation 1: Avoiding making the network request multiple times
                //Client makes request to -> server 
                //Server makes request to -> database

                //Database sends back response to -> server
                //Server sends back response to -> client
                //CLient able to do stuff with data it requested 

                //In order to avoid doing that network request again to the database, it can be cached
                //Accomplished by having the client or server cache that value from the database request

            //Another situation 2: Avoiding the request to redo a computational long operation
                //Caching to avoid redoing a computationally long/intensive operation

                //Maybe the client requests something from the server
                //The server then has to do some very long/intensive operation (Very long time complexity)
                //You may want to cache that. 
            
            //Another situation 3: Avoid doing the same operation no necessarily due to speed, but it may slow down your system in other ways
            //Most of the time, caching is used to speed up the system
                //Though not always the case. 
                //Imagine you have multiple servers
                //And all the servers are hitting the database with the same request 
                //Perhaps you have a bunch of clients doing the same thing 
                //All the clients are making the same request to the same Instagram profile 
                
                //Here you can use caching, not to increase the speed of the network request necessarily
                //But instead, you don't want to read the database 1000 times for the same thing 
                //because that may overload the database
                //So you would use caching to not have to read from the database that many times 

//Algoexpert Example
    //1 - Caching the questions list
    //First time you go to algoexpert, 

    //Caching the questions list on the client 

    //The list of questions is static content
        //So instead of having the client make the request to the server to get the questions list everytime,
        //We cache the questions list on the client after the first time client accesses the questions list. 
    
    //2 - Running code on algoexpert 
        //Running user code on algoexpert takes around 1 second. 

        //To run the algoexpert solution code - it takes very little time, because those values from the solution are cached
        //Thus, the algoexpert solution will be in the order of milliseconds rather than
        //a full second like running user submitted code 

        //How do you cache the running code?
            //You could store the cache in a separate component from the server like 'redis' - an in-memory database (key-value store)

            //Client writes their solution, sends it the algoexpert server to check if it is right
            //Server gets the request. Which is a bunch of bytes. We hash the request to a single signature
            //The signature is a single integer
            //We then compare the integer/signature to our cache stored in redis or server
            //We check if that signature matches the key in the cached key-value store 
            // We then return the cached value to the client 
            //This avoids doing the additional 1 second computation
            //We effectively just return the value we had in our cache to save us from doing that computation of running the users code 

    //Writing to server/database
        //Client writes a post (e.g. facebook/linkedin/etc) sends it to server 
        //Post is then stored in database

        //Caching the post at the server level in memory 
            //Now, your post exists in two places. (2 sources of truth)
                //1. cached in the server
                //2. stored in the database
        
        //Let's say you edit the post 
            //Client edits the post 
            //Server makes a request to the database
            //How to deal with these 2 sources of truth?

                //1. write-through cache
                    //When you write a piece of data that exists in 2 places e.g. is cached in one place and stored in the database
                    //Your system will write that piece of data both in the cache and in the database in the same operation
                    //This way, the cache and the database are always in-sync 

                    //So if you are editing your post
                        //Client makes request to the server
                        //Edits the cache in the server
                        //Also edits the post in the database
                    
                    //The downside to this is that you still have to go to the database
                
                //2. write-back cache
                    //Youre a user, you edit your post
                    //That makes a network request to the server
                    // Server will update the cache, but ONLY the cache
                    // So that means, your cache will be out of sync with your database 
                    // Your systems will ASYNCHRONOUSLY update your database with the values stored in the cache 
                        //This will be done in a variety of ways
                            //Could update the database entry every 5 seconds/ 5 minutes /5 hours etc 
                            //Could evict stuff out of the cache when cache gets filled up THEN the database is updated 

                    //The downside to this is if something happens to your cache BEFORE you update the database
                        //You will lose data. Though, there are some ways to mitigate that.
            
    //Design Youtube Comment Section System
        //We have a bunch of servers that cache the comments for a single video in-memory
        //We have a bunch of clients that will make a network request to the corresponding server to access the comments for the video 

        //Caches can become 'stale' if they haven't been updated 
        //That is, the caches have data that is older and not up to date

        //If comments for a video become stale 
        //That is, if some user1 updates their comment
        //But for other users2, they are seeining user1's old, un-updated comment 
        //That is a problem 
        
        //Other data, is okay to be 'stale'
            //e.g. view counts on a video 
            //If a user sees a stale view count on a video, that isn't that bad 

    //So you have to design the system in a way to keep in mind the requirements and features
        //Some things we care if certain data is stale or not - e.g. comments and posts

        //Other things, we don't care if data is stale - e.g. view counter accuracy 

    //Summary:
        //Caching is great. But it has some pitfalls, so you have to address those pitfalls. 

        //In general if the data you are dealing with is static data, or immutable data - (e.g. questions list on algoexpert)
        //The data doesn't change all that often or it seldom changes or never changes
        //Then caching works very well in those instances

        //But if you are dealing with data that is mutable, then caching will be tricky
        //Because you will have multiple locations where the data exists, the cache and the database
        //You have to make sure the data in these places become in-sync
        //otherwise, the data will become stale in some places 
        //and depending on your use case, that may lead to some problems 

        //Rule of thumb:
            // Consider using caching if you are storing immutable/static data
            // If you have a single thing reading or writing that data, consider caching (e.g. a single users account on algoexpert)
            // Once you have multiple things reading and writing the data, caching might not be the best idea (e.g. multiple users commenting on a video)

            //If you don't care about consistency/staleness of data, you can consider caching 
            //Or if you can design your system to deal with the stale data in your cache, then caching could be considered

        //Eviction policies with caches 
            //There is a finite amount of space - you can't store everything in a cache 
            //Other times, you have stale data in your cache and you need to get rid of the stale data

            //What are the policies of how do we get rid of data in caches? 
                //A few popular policies:
                    //LRU - least recently used
                        //get rid of least recently used pieces of data in a cache 
                        //You need a way to track what is the least recently used piece of data
                        //we make the presumption that the LRU data is most likely not relevant anymore
                    
                    //Least frequently used
                        //get rid of data that is accessed the least 
                    
                    //LIFO or FIFO
                        //Last in first out or first in first out 

                    //Many different policies/ways to evict data out of the cache
                    //That all depends on your use cases 
                    //You would have to talk to your interviewer about what features are valued
                    //So you can determine what policy to implement for cache eviction
