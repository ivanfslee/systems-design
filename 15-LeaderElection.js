//Key Terms
    //Leader Election
        //The process by which nodes in a cluster (for instance, servers in a set of servers) elect 
        //a so-called 'leader' amongst them
        //responsible for the primary operations of the service that these nodes support.
        //When correctly implemented, leader electon guarantees that all nodes in the cluster know 
        //which one is the leader at any given time and can elect a new leader if the leader
        //dies for whatever reason.

    //Consensus Algorithm
        //A type of complex algorithms used to have multiple entities agree on a single data value, like who 
        //the 'leader' is amongst a group of machines. 
        //Two popular consensus algorithms are Paxos and Raft

    //Paxos & Raft
        //Two consensus algorithms that, when implemented correctly, allow for the synchronization 
        //of certain operations, even in a distributed setting

    //Etcd
        //Etcd is a strongly consistent and highly available key-value store that is often used to implement leader election in a system.
        //   https://etcd.io/

    //ZooKeeper
        //A strongly consistent, highly available key-value store. 
        //Often used to store important configuration or to perform leader election.
        // https://zookeeper.apache.org/

//Leader Election is typically an advanced aspect in systems design
//In the context of a systems design interview, only a high-level understanding is needed

//A system that you might want leader election
    //Netflix/Amazon Prime - a service where users want to subscribe on an annual basis

    //Third-Party Service        Database

    //Database contains the users and the status of their subscription
        //Also contains the date their subscription is supposed to renew
        //Also contains the price the user will be charged on a recurring basis

    //You might be using some third-party service 
        //Actually charges the user
        //The debit transactions from the user's bank accounts
        //e.g. paypal, stripe 
        //So this means your third party service needs to communicate with your database
        
        //You may not want the 3rd party service to interact with your database directly
            //Also, that may not be possible because 3rd party can't connect directly to db
            //Even if it were possible, you may not want to do that
                //Your db is a sensitive part of your system
                //Because of that, you may not want a 3rd party service to connect directly to it
                //A reasonable thing to do would be to have some kind of service in the middle
                //in between the 3rd party and the database

                //3rd party service -> middle service  <- Database

                //That middle service is in charge of communicating with the db
                //figure out when a users subscription is up for renewal

