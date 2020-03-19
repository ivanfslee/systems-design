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
