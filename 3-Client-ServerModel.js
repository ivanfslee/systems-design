//Client-Server Model
    //Key Definitions:
        //1. Client
            //A machine/process that makes requests of data from a server
            
            //A machine/piece of software can be both a client and a server. The characterization is not mutually exclusive
            //e.g. A machine can be a server for end users and a client to a database
        
        //2. Server
            //A machine/process that listens for incoming network requests and serves data/service to a client
            
            //A machine/piece of software can be both a client and a server. The characterization is not mutually exclusive
            //e.g. A machine can be a server for end users and a client to a database

        //3. Client-Server Model
            //Paradigm for modern systems
            //Consists of clients requesting data/service from servers
            //And servers providing the data/service to clients
        
        //4. IP Address
            //An address given to each machine connected to the public internet
            //IPv4 addresses are 4 numbers separated by dots, where all 4 numbers are between 0 and 255
                //a.b.c.d - all numbers are between 0 and 255
                //Special values:
                    //127.0.0.1 - local machine, aka localhost
                    //192.168.x.y - Your private network. For example, all machines in this private wifi network will have 192.168 prefix
        //5. DNS
            //Doman Name System
            //The entities/protocols involved in translating domain names (e.g. google.com) to IP addresses. 
            //Machines make a DNS query to a well known entity which then return the IP address or multiple ones of the requested domain name
        

    //When making an HTTP request to algoexpert.io, behind the scenes, the client makes a DNS query to find the ip address of algoexpert.io
    //Only then can client communicate with algoexpert servers 

    //IP address is a unique identifier of a machine 

    //Google cloud platform provides/assigns algoexpert an IP address(es)

    //Client/Browser makes HTTP request to -> Server
        //When making HTTP request (way to send info that the server will understand), 
        //the request is composed of bytes bundled as 'packets'
        //The packets contain info on the client. (e.g. client's ip address - aka 'source address' of the request)
        //So when server gets request, it will know what IP address to send the response to

    //Server sends back response to -> Client/Browser

    //Client/Browser makes DNS query to -> DNS 

    //DNS sends IP address to -> Client/Browser

    //Ports 
        //Servers are machines that are waiting for requests from other machines
        //Server listens for requests on specific ports (16000 total ports)

        //Client when making requests has to specify what port you want to communicate on
            //Analogy - IP address is an apartment complex
                //Port is the specific apartment number 
            //Typically, clients know what port to send requests to based on the protocol they are using
                //e.g. HTTP requests  on port 80
                //e.g. HTTPS requests on port 443
    