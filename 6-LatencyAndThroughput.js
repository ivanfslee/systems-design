//Key Terms
    //Latency
        //The time it takes for a certain operation to complete in a system.
        //Typically measured in time - milliseconds or seconds 
            //Know these orders of magnitude:
                //Reading 1 MB from RAM - 250 microseconds
                //Reading 1 MB from SSD - 1,000 microseconds
                //Transfer 1 MB over Network - 10,000 microseconds (10 milliseconds)
                //Reading 1 MB from HDD - 20,000 microseconds (20 milliseconds)
                //Inter-Continental Round Trip - 150,000 microseconds (150 milliseconds)

    //Throughput
        //The number of operations a system can handle per time unit
        //Typically, throughput of a server can often be measured in requests per second (RPS) or queries per second (QPS) 

        //Wikipedia:
        // common measure of the amount of search traffic an information retrieval system
            //such as a search engine or a database, receives during one second.
            //The term is used more broadly for any request–response system
            // more correctly called requests per second (RPS).

        // High-traffic systems must watch their QPS in order 
        // to know when to scale the system to handle more load.

//Latency and Throughput 
    //Measures of performance for a system

    //Latency
        //How long it takes for data to traverse a system
            //How long it takes for data to go to one point in the system to another point in the system
        
        //Latency of:
            //Network request - client to server and then server to client
            //Reading piece of data from disk -

            //Most important aspect of latency - these different things in the system
                //have different latencies
            
            //So in a system, certain things will have higher and lower latencies
            
            //Latencies of various operations (typically involving data transfers)
                //The important point is to grasp the orders of magnitude of these operations
                //and how they compare to each other
                //Not the actual numbers themselves

                //Reading 1 mb of data from memory =  250 microseconds (1 million microseconds - 10^6 - in one second)
                    //very fast operation 

                //Reading 1 mb of data from SSD = 1,000 microseconds 
                    //reading data from memory is alot faster than reading stuff from SSD

                //Sending 1 mb data over 1 Gbps (gigabit per second network) network = 10,000 microseconds (10 milliseconds)
                    //we are assuming the 2 machines are right next to each other
                    //no real physical distance between the two machines 
                    //so, making a network request - e.g. api calls 
                        //this is going to take alot longer than reading data from an SSD 
                        //or even much longer than reading data from memory 

                    //Think about data over the network as making a network request, like an api call
                    //Think about reading data from memory like accessing a variable in your code 
                
                //Reading 1 mb of data from HDD = 20,000 microseconds 
                    //slower than sending data over the network
                    //takeaway point is that depending on the hardware you have (SSD vs HDD) sending data over the network might be faster
                
                //Sending packet (alot smaller than 1 mb) 1500 bytes - over the network from california to netherlands, back to california
                    //150,000 microseconds
                    //sending stuff across half the world is ALOT slower than any of the operations above 
                    //packet is also smaller amount of data than 1 mb

                    //Why does it take that long?
                        //Electricity has to travel and it takes some amount of time 
                        
                //So when designing a system, you want to optimize it by lowering the latency of the system
                    //Though certain systems may lend itself to needing more optimization than others 
                    //e.g. video games 
                        //multiplayer
                        //lag in video games - you have a high latency 
                        //it might be because the server you are playing on is half way across the world from you
                        //and it just takes a while for your computer to make network requests to the video game server 
                        //And typically with a video game you are sending a lot of data across the network
                        //so those 150,000 microseconds add up 
                        //

                    //e.g. some website
                        //you may not care if it takes a few seconds for the page to load
                        //You may care more about showiong accurate information and high uptime of the website instead
                        //And those features may come at the expense of latency

                    //As you design your system, you have to think of these tradeoffs/priorities 

//Throughput - 
    //How much work a machine can perform in a given period of time
    //In the context of computing in general - 
        //How much data can be transferred from one point in the system to another point in the system, in a given amount of time
        
        //Typically measured in Gbps/Kbps (kilobits per second)/ etc - some amount of data per some unit of time 

        //e.g.  1 Gbps network can support 1 billion bits per second 

        //Imagine a bunch of clients making network requests to one server 
            //Throughput of the server would be how many bits it can handle per second 
            //server is a bottleneck that can fit a certain number of bits in an amount of time 
        
        //How to increase throughput or optimize throughput?
            //Naive answer - pay to increasae throughput 
            //The thing that determines how much can go in to algoexpert server at any given time (e.g. per second)
            //is determined by their cloud provider (Google cloud platform)
            //In theory, we can just pay google to increase throughput 

            //Just increasing throughput doesnt necessarily fix a potential problem you have in the system
                //e.g. single server handling tons of requests from clients 
                    //maybe the server is google search or google messenger
                    //That server is serving thousands/millions of requests per second
                    
                    //Just blindly increasing throughput doesn't make sense
                    //Because that single server still serves as a bottleneck 

                    //A better way to address this problem is to have multiple servers 
    
//Throughput and latency are not necessarily correlated 
    //e.g. parts of a system that have very low latency (support very fast data transfers)
        //But you might have some parts of the system with low throughput 
        //So that means the low latency operations are bottlenecked 
        
        //You cannot make assumptions about latency or throughput based on the other
            //You cannot assume throughput from latency
            //You cannot assume latency from throughput 




