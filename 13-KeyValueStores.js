//Key Words
    //Relational Database

    //Non-relational Database

    //Key-Value Store - A flexible NoSQL database thats often used for caching and dynamic configuration.
        //Popular options include DynamoDB, Etcd, Redis, ZooKeeper

        //Etcd - (a technology/product you can use) A strongly consistent and highly available key-value store that's often used to implement
            //leader election in a system
            //https://etcd.io/

        //Redis - An in-memory key-value store.  (a technology/product you can use)
            //Does offer some persistent storage options but is typically used as a
            //really fast, best-effort caching solution 
            //Redis is also often used to implement rate limiting
            //https://redis.io/

        //ZooKeeper - a technology/product you can use
            //A strongly consistent, highly available key-value store.
            //Often used to store important configuration 
            //or to perform leader election.
            //https://zookeeper.apache.org/
    
//KEY    VALUE
//foo     9001
//bar    SystemsExpert
//bax     1, two, 3

//Structure of Relational Databases is often very useful because of the strong querying capabilities

//On the flip side, the same structure imposed on you could be large and cumbersome
//In those cases, you may prefer to use a NoSQL db

//In comes the key-value store
    //One of the most popular NoSQL databases out there

    //Key-value store - NoSQL db that allows for key-value mappings of keys (typically strings) with values (typically strings, integers/other)

    //e.g.
    //KEY    VALUE
    //foo     9001
    //bar    SystemsExpert
    //bax     1, two, 3

    //You can think of key-value stores like hash tables 

    //key value stores are flexible because they don't have that tabular structure like in Relational DB
    //key value stores are also simple - just a mapping between keys and values 

    //Thus, key/value store / NoSQL is great for times when you don't need that tabular like structure 

    //Use cases for key-value store
    //1. Caching - lends itself perfectly to key-value stores
        //for example - 
            //responses to network requests - are values
            //and you access those responses via ip address or hash or username- these can be the keys

    //2. Dynamic Configuration
        //You may want parameters or constants in your system
        //e.g. Algoexpert - 
            //A boolean indicating whether or not systems expert is launched or not
            //Different parts of the system may want access to that boolean

            //Key value store would be a good place to store that boolean/parameter
                //Key               Value
                //systemsExpert     True/False
            
    //Another advantage is because you are accessing values directly through keys
    //you are not searching through the database
    //you are not searching through every item

    //You can access the value very fast through the key

    //So quite ofen, by using key-value stores, you can get increased throughput and reduced latencies

//Different flavors of Key-value store
    //Some key-value stores (e.g. DynamoDB) write the data to disk, so that data is persistent

    //Other key-value stores (e.g. Redis) may only right to memory
        //If it goes down, the data written to memory is gone
        //Depending on your use case, that may be okay
        //If you are using key-value store just for caching, it may be okay if it goes down
        //You may miss some cache hits when key-value store goes down
        //Then you just wait for the cache to fill up again when the key-value store is restored
    
    //Some key-value stores may give you strong consistency, others may only give you eventual consistency
        
