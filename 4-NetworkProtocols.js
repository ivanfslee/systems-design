//Network Protocols
    //Key Terms
        //1. IP - 'Internet Protocol'
            //A network protocol that outlines how almost all machine-to-machine communications happens in the world
            //Other protocols TCP, UDP, HTTP are built on top of IP

        //2. TCP - 'Transmission Control Protocol'
            //Network protocol built on top of Internet Protocol
            //Allows for ordered, reliable data delivery between machines over
            //public internet by creating a 'connection'

            //TCP typically implemented in thekernal, which exposes 'sockets' 
            //to applications that they can use to stream data through an open connection

        //3. HTTP - 'HyperText Transfer Protocol'
            //Common network protocol built on top of TCP.
            //Clients make an HTTP request to a server and server responds
            //HTTP requests typically have a schema:
                //host: string (e.g. algoexpert.io)
                //port: integer (e.g. 80 or 443)
                //method: string (e.g. get, put, post, delete, options, patch)
                //headers: pair list (e.g. 'Content-type' => 'application/json)
                //body: opaque sequence of bytes

            //Example Response schema
                //status code: integer (e.g. 200, 401)
                //headers: pair list (e.g. 'content-length' => 1238)
                //body: opaque sequence of bytes
        //4. IP Packet -
            //sometimes called 'packet' or network packet. 
            //IP packet is the smallest unit used to describe data being sent over IP, aside from bytes
            //IP packet consists of:
                //IP header - contains source and destination IP addresses 
                    //as well as other info related to network
                //payload
                    //data being sent over the network

    //Typically Network Protocols are low-level and swe's will not deal with them on a daily basis
    //In the context of Systems Design Interviews, understanding them at a high level is what is needed
    
    //What is a protocol?
        //An agreed upon group of rules and procedures for an interaction between 2 parties
        //e.g. Protocol for human interaction when you bump into them in the hallway
        //2:42