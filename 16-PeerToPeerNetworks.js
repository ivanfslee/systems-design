//Key Terms
    //Peer-To-Peer Network
        //A collection of machines referred to as peers that divide a workload
        //between themselves to presumably complete the workload faster than would
        //otherwise be possible.
        //Peer-to-peer networks are often used in file-distribution systems.

    //Gossip Protocol
        //When a set of machines talk to each other in an uncoordinated manner in 
        //a cluster to spread information through a system without requiring a central 
        //source of data
    
//Situation:
    //You are designing a system where 
    //you want to deploy and transfer files to 
    //thousands of machines at once

    //You have one machine - that will deploy/transfer large files (5 gb) to a thousand machines
    //You want to be able to do this repeatedly

    //Let's say you have security footage that you have to send every 30 min/multiple times a day
    //You have to send that footage to a thousand machines

    //Our system throughput has 40 Gbps (5 GBps) 
        //Recall (8 gigabits = 1 gigabyte, so 40 Gbps/(8 Gb/ GB) = 5 GBps)
    //Gbps = gigabits per second
    //GBps = gigabytes per second

    //We are using a large companies data center that can support a throughput of 5 GBps

    //Objective:
        //At any point we want to transfer this 5gb file to 1000 machines
        //So with a network throughput of 5 GBps, that would take 1000 seconds (16.6 minutes)

        //16.6 minutes is kind of long for this type of operation. 
        //Especially if we are doing this multiple times a day

        //This will be a bottleneck in our system.
        //That one machine serving the 5 gb file will be the source of major slowdown in our system

    //Potential solution: Multiple servers serving up file
        //We could have multiple machines (instead of 1 machine) serving up the 5 gb file
        //Maybe we have 10 machines serving up the file to 1000 other machines 
        //With 10 machines, that would increase our speed by ~10 

        //And would bring our time down to 17 min/ 10 = 1.7 minutes

        //Which is much better, but also, kind of slow depending on our use-case

        //The problem with this is that we have to replicate that 5 gb file across 10 machines
        //And this will need to happen multiple times a day 

        //Imagine if we had 10,000 machines we had to propagate the file to
        //Then we would need more than 10 machines to send the files 
        //This design solution may not scale well

    //Potential Solution: sharding the 5 gb file 
        //Some of the files live in one machine, 
        //other files live on the other machines

        //Each of the machines has a part of the 5 gb file

        //With this, you will run into the same problem
        //The thousands of machines will need to get the same file from a particular machine
        //which would serve as a bottleneck

    //Potential Solution: Peer to Peer Network

        //Situation: 1 machine with a 5 gb file
            //The machine needs to send this to thousands of other machines (peers)
            
            //We break up the 5 gb file into very small pieces 

            //We send these pieces to the peers

            //And have the peers get the pieces they need from each other 

            //And let the peers build up the total 5 gb file
        
        //Detailed situation:
            //We break up our 5 gb file into 1,000, 5 megabyte (MB) files
            //We have 1000 peers and 1000 files
            //We will send 1 5MB file to each peer
            //This would take 1 second (because our throughput is 5 GBps and we are sending 1000 5MB files to 1000 peers)

            //Now, a single peer has one of 1000 pieces
            //The peer will need to talk to 999 other peers for the other 999 pieces
            //How long would it take a single peer to do? 
                //0.999 seconds total!!
                // (1 sec / 1000) * 999 peers = .999 seconds 
                //12:49

                //Machines can talk to each other in pairs
                //Essentially, you can parallelize 5 mb transfers 

                //Simple/Naive Solution:
                    //Compared to our single machine sending to each 1000 peers

                //P2P solution:
                    //In our p2p network solution, we have a bunch of communication happen at once

                //Given our network throughput of 5 GBps
                //That means to send a single 5 mb file takes .001 seconds

                //15:44 - sequence demonstrating why/how the p2p network is way faster than single machine serving the file
                    //to one machine at a time

                //For p2p to work properly peers need to know what peers to talk to next
                    //peer discovery - peer knows which peer to look to next 
                    //peer selection -
                    //ways the peers know which peers to talk to next and trasfer their data next

                //2 primary ways
                    //1. central database - a machine that orchestrates the p2p network and knows
                        //at all times or can figure out at any time what peer a peer should talk to next
                    
                        //So the central database will tell a peer you should give some of your data to this peer

                        //central database is known as a 'tracker'

                    //2. gossip protocol/epidemic protocol
