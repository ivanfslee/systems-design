//Key Terms
    //Replication
        //The act of duplicating the data from one database server to others. 
        //This is sometimes used to increase the redundancy of your system and tolerate regional failures for instance.
        //Other times you can use replication to move data closer to your clients
        //Thus decreasing the latency of accessing specific data

    //Sharding
        //Sometimes called 'data partitioning'.
        //Sharding is the act of splitting a database into two or more pieces called 'shards'
        //and is typically done to increase the throughput of your database. 
        //Popular sharding strategies include:
            //Sharding based on a client's region
            //Sharding based on the type of data
                //e.g. user data gets stored in one shard
                //and payments data gets stored in another shard
            //Sharding based on the hash of a column (only for structured data)

    //Hot Spot
        //When distributing a workload across a set of servers
        //that workload might be spread unevenly.
        //This can happen if your 'sharding key' 
        //or your 'hashing function' are suboptimal
        //or if your workload is naturally skewed
        //Some servers for example will receive a lot more traffic
        //than others, thus creating a 'hot spot'

//Data redundancy and data partitioning techniques can be used to enhance 
//a system's fault tolerance, throughput, and overall reliability

//A systems performance is often dependent on its database's performance
    //If a systems database is not available, the system itself will likely be unavailable
    //If a systems database, latency is high and throughput is low , then the system itself will be the same

    //When we design a system that is performant, we have to make sure that the database is performant as well
        
//Main Database -> Sync  -> Replica
//Main Database -> Async -> Replica

    //Situation: 
        //Database goes down -> Subsequently, system goes down
        //How to prevent this?
        //Replicate the database. Think of the replica as in standby

        //The main database has reads/writes performed on it 
        //But it also submits those changes to the replica

        //The replica would take over if the main database fails 
        //Once the main db comes back up again, it would be updated by the replica 

        //Then main db becomes the main db again and replica goes back to being a replica

        //Your replica always needs to be up to date with the main db
        //So whenever main db is updated, the replica has to be updated as well - in a SYNCHRONOUS way 
            //Main Database -> Sync  -> Replica
            //If you want your replica to be able to takeover in the event your main db goes down
            //Whenever there is a write operation to the main db -> You need to write to replica as well
            

























