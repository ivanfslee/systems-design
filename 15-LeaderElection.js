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

                //That middle service is in charge of communicating with the db (perhaps on a periodic basis),
                    //figure out when a users subscription is up for renewal,
                    //how much the user is to be charged
                    //Then the middle service goes to the 3rd-party service (paypal or stripe)
                    //and tell that 3rd-party service to charge the user
                    
                    //Problems with this:
                        //The middle service is only one machine/server
                        //What happens if that middle service fails?
                        //In a large-scale system, we always have things failing 
                        //The failure of the middle service means our entire payment system fails 

                        //To address this, we can use redundancy
                            //Instead of just one server in the middle service, 
                            //we have 5 servers
                            
                        //By having 5 servers as the middle service, we introduce a new problem:
                            //When one server in our middle service makes a request to the 3rd party service
                            //The request is to tell paypal/stripe to charge the user
                            //The problem is that we now have 5 servers in the middle service
                            //We definitely only want to to the request one time
                            //We don't want to duplicate that request 5 times

                        //In comes Leader Election
                            //If you have a group of machines that are in charge of doing the same thing
                            //Instead of having all of them doing the same thing, it may not be something you want to be doing multiple times
                            //Leader Election has the group of servers elect one of them as the 'leader'
                            //And that server alone is responsible for doing the action that all of those servers are meant to do

                            //Meanwhile, the other servers that are not the leader are on standby 
                            //in case something happens to the leader
                            //We will call the other servers the 'followers'
                            //The leader will be doing the business logic
                            //The followers wont be doing much

                            //If something happens to the leader, one of the followers will become the new leader
                        
                        //The challenge is having a bunch of separate machines all knowing who the leader is 
                        //at any given time and all be capable of reelecting a new leader at any moment
                        //This is actually quite a challenge.

                        //When you have multiple distributed machines that have a shared state
                        //In this case, the state is who the leader is.
                        //You never know what will happen with the network. What happens if there is a network error
                        //and machines are no longer able to communicate with one another. 
                        //The concept of leader election is non trivial

                        //You need to have separate machines agree on something together
                        //That is the real difficulty

                        //The act of sharing some state and reaching an agreement is difficult

                        //In order to achieve consensus, we need to use a 'consensus algorithm'
                        
                        //Consensus Algorithms
                            //Math heavy
                            //They allow multiple servers in a group or more broadly
                            //multiple nodes in a cluster to reach consensus 
                            //or to agree on some single data value

                            //In the case of leader election, that value is who the leader is

                            //There are alot of Consensus algos out there
                                //Two consensus algos - Paxos & Raft
                            
                            //In the industry, you will never implement a consensus algorithm yourself
                            //Because of that, Systems Expert won't go over how they work

                            //How would you implement leader election then, in practice?
                                //You use some 3rd party tools, who themselves will use a consensus algorithm like paxos and raft to implement leader election, under the hood
                                    //e.g. zookeeper
                                    //e.g. Etcd
                                    //These tools typically aren't used solely for leader election
                                    //But happen to allow you to implement leader election 

                                    //anecdotally, until at leasat 2019, Uber used zookeeper to implement leader election
                            
                            //In the video, we will go over how to implement leader election using Etcd
                                //Etcd - key-value store, aka, a database that allows you to store key-value pairs
                                    //you can think of it like a hash table
                                    //Etcd is highly available and strongly consistent
                                        //strongly consistent - means you will always get the same value whenever you access a certain key

                                        //There aren't many databases, let alone, key-value stores that have both high availability and strong consistency
                                        
                                        //The way Etcd achieves these two qualities is by doing a leader election and consensus algorithm
                                            //Etcd utilizes the Raft consensus algorithm

                                            //Simply put, they will need multiple machines that will read and write to the key-value store that Etcd stores
                                            //They also need to ensure that they have a single value of truth i.e. leader election
                                            //for strong consistecy
                                            //They will need one leader to take care of the writes to the key-value store
                                            //The other machines are presumably for high availablity

                        //We can use Etcd to implement our own implementation of leader election
                            //Multiple servers communicate with Etcd key-value store
                            //At any given time, we would have one key-value pair in the Etcd key-value store
                            //That key-value pair would contain the value of who the leader was
                                //The key could be 'leader' and the value is whoever the leader is
                            //We know that Etcd has high availability and strong consistency
                            //Thus, we know that the key-value pair in the Etcd is available and any machine in your cluster of machines
                            //can read that value from Etcd

                            //Thus, you got a simple implementation of leader election

                        //Coding example 16:53
