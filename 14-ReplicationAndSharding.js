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

    //Situation: Using replication to increase availability

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

            //If for whatever reason the write operation to the replica fails, the write operation to the main database should not be done 
            //You never want your replica out of sync with your main db
            //This also means that your writing to the db will take a little longer, because you have to write to the replica as well

            //As a result, with replication, you are increasing the availability of your db and subsequently, your system as a whole

            //We can also use replication to increase our db's latency and as a result our systems latency

    //Situation: Using replication to improve latency
        //We are designing LinkedIn
        //People write posts and other people view those posts
        //We have users in US and India
        //We will have 2 db, one in USA, serving USA users
        //One db in India, serving India users

        //Users in USA and India will experience lower latency because they are being 
        //served by db in their respective regions
    
        //I am a US user
            //I write a post
            //The post will be written to US db
            //My post needs to be replicated in the India db
            //I may have friends in my LinkedIn account in India
            //So I need my post to appear in the Indian friends linkedIn feeds

            //However, maybe I don't need my post to show up right away in india users
            //In that case, I can ASYNCHRONOUSLY write to the replica db (india db)
            //Every 10 min/5 min/some time period, the main db will async with the replica db (india db)
            //And the india db will do the same with the usa db

            //The two databases (US and India) will update each other

            //This is not necessarily how linkedIn is designed, but it is a way you COULD design it

            //This is an example you could use replication to lower latency
            //If you don't mind async updating db 
            //That is, in the cases that you don't need to synchronize your data right away at the moment the data is being written to the db

            //Another example, you are deploying piece of software to production
            //You have to serve multiple regions across the world
            //You may want to update your regional db first
            //Then update the other overseas db asynchronously. 
            //You roll out the update regionally.
    
    //Situation:
        //You have one main db
        //Your system is serving millions of requests
        //Your main db is getting overloaded, it cannot serve that many requests and is becomming a bottle neck
        //DB's throughput is not high enough

        //To solve this you can:
            //1. scale vertically - make your db server beefier and upgrade it to handle more requests - but theres a limit to how much you can upgrade vertically
            //2. scale horizontally - add more database servers. You could have multiple replicas. 
                //The problem with multople replicas is What if you have alot of data?
                //What if you are facebook and you have billions of users? That is alot of data that has to be replicated for each replica db you have
                    //Thus, this solution might not be the most optimal way to do this
        
        //Enter sharding - we can split up the data
            //One part of the data can be stored in one db server, and another part of the data can be stored in another db server

            //You split up your one database into smaller pieces

            //You end up with increasing throughput and you also avoid duplicating large amounts of data

        //How do you know HOW to split up the data?
            //If you are using relational db:
                //You can put some rows into one shard
                //Some other rows into another shard
                //If you have a db of users
                //You can store users with names starting in A to M in one shard
                //Then you can stores users with names N to Z in another shard

                //Or you could split up by region
                //If you had a db of users with their location
                //you can store users from North America in one shard
                //and you can store users from Asia in another shard