//Key Terms
    //Latency
        //The time it takes for a certain operation to complete in a system.
        //Typically measured in time - milliseconds or seconds 
            //Know these orders of magnitude:
                //Reading 1 MB from RAM - 250 microseconds
                //Reading 1 MB from SSD - 1000 microseconds
                //Transfer 1 MB over Network - 10 milliseconds
                //Reading 1 MB from HDD - 20 milliseconds
                //Inter-Continental Round Trip - 150 milliseconds

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