//Key Terms
    //Forward Proxy
        //A server that sits between a client and servers and acts on behalf
        //of the client
        //Usually used to mask the client's identity (ip address)

        //Forward proxies are often referred to just 'proxies'

    //Reverse Proxy
        //A server that sites between clients and servers and acts on behalf
        //of the servers.
        //Usually used for logging, load balancing, or caching 

    //Nginx (a specific technology/product you can use in your system)
        //'engine x'
        //Popular webserver that is often used as a reverse proxy 
        //and load balancer
        //www.nginx.com

//Proxies 
    //'Proxy' usually refers to 'Forward Proxy'

    //Forward Proxy - server that sits in between clients or a group of clients and server or group of servers
        //The proxy acts on behalf of the client/clients
        //Its on the clients team/side 

        //When the client makes a request to the server
        //The proxy will make the request to the server on behalf of the client

        //Client -> (Forward) Proxy -> Server 

        //Server gets the request 
        //Server sends response to Proxy
        //Proxy sends response to client 

        //Server -> (Forward) Proxy -> Client 

        //Thus, forward proxy can be used in a way to hide the identity of the client 
        //that is requesting something from the server

        //That is because the initial request from the Proxy
        //The requests source ip address will be from the Proxy, not the client 
        
        //VPN's work like this. VPN's act as a Proxy to hide the identity of the client 
        
        //This is a way to access website that would otherwise be unaccessible to the client
            //e.g. certain countries/organizations stop the client from accessing their servers
            //but the proxy hides the client's identity
    
    //Reverse Proxies 
        //Reverse Proxies act on behalf of a server in an interaction between a client and a server
        //Forward Proxies act on behalf of a client in an interaction between a client and a server

        //Client want to interact with the server
        //If the Reverse Proxy is configured properly, 
        //The client's request will instead go to the Reverse Proxy (instead of the server)

        //The client will not know that the request went to a reverse proxy
        //The client will just think that the request went to its intended destination server
        //705
        