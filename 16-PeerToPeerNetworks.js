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
        //