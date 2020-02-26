//Key Terms
    //1. Databases
        //Databases are programs that either use disk or memory to do 2 core things
            //1. Record data
            //2. Query data
        //In general, they are themselves servers that are long-lived and interact with the
        //rest of your application via network calls, with protols on top of TCP or even HTTP.

        //Some databses only keep records in memory. (which arent persistent)
        //The users of such databases are aware of the fact that those records may be lost 
        //forever if the machine or process dies

        //Generally speaking, databases need persitence of those records, and thus cannot use memory.
        //This means for any long-term usage, you have to write your data to disk. 
        //Anything written to disk will remain through power loss or network partitions
        //so that is what's used to keep permanent records

        //Because machines often die in a large scale system, special disk partitions/volumes 
        //are used by the database processes, and those volumes can get recovered
        //even if the machine were to go down permanently 

    //2. Disk
        //Refers to HDD (hard-disk drive) or SSD (solid-state drive)
        //Also known as 'non-volatile storage'

        //Data written to disk will persist through power failures and general machine crashes

        //SSD is far faster than HDD (latencies of accessing data from SDD if much lower than HDD)
        //But SSD is far more expensive (financially)
        //Because of that, HDD will typically be used for data that's rarely accessed or updated
        //but that's stored for a long time, and SSD will be used for data
        //that's frequently accessed and updated

    //3. Memory
        //Typically refers to Random Access Memory (RAM)
        //Data stored in memory will be lost when the process that has written that data dies
        //That is, memory data does not persist 
    //4. Persistent Storage
        //Typically refers to disk, but in general is any form of storage that persists
        //if the process in charge of managing it dies.

//Any system typically needs storage
    //Database serves 2 purposes
        //1. Store data /reading/setting/record
        //2. Retrieve data /writing/getting/query
    //Common gap in knowledge
        //Thinking that a database is some nebulous box that exists in the ether 
        //Which is a limited understanding of a database

        //All a database is, is a server
        //The machine you are on right now could be used as a database 
        //Then all you do is set up so that other computers (clients) can communicate with your machine (database)
        //By writing and reading data to it 
    
    //Persistence
        //persistence of the data you store in the database
        //People tend to assume that your data is okay, even after power outages, shutdowns
            //This assumption is fair
            //But isnt always correct 
        
        //Disk vs. Memory 
            //If your data writes to disk
                //That data will persist after shutdowns/system crashes
            
            //If your data writes to memory 
                //Why use memory over disk?
                    //Reading and writing to memory is much faster than reading and writing to disk
                //data written to memory will NOT persist after shutdowns/crashes 
    
    //There are hundreds of DB offerings 
        //On google cloud platform alone there are 8 database options to choose from 
        //Storage is very complicated
        //We just scratched the surface here

        //Alot of different things db can offer 
            //e.g. relational - structure of how data is stored 
            //e.g. availability - uptime of your system 
            //e.g. distributed storage - multiple machines store database
                //split the data across multiple machines?
                //replicate the data across multiple machines?
                //consistency of the data - staleness or up to date data?
        
        
        
