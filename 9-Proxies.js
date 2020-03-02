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
        //Then the reverse proxy will forward the request to the server

        //Client sends response to server
            //Client -> Reverse Proxy -> Server 
        
        //Server sends back response to client 
            //Server -> Reverse Proxy -> Client 

        //They main point is that the client thinks it is interacting directly with the server
        //To the client, there is only one entity instead in actuality, it is two (reverse proxy and server)

        //The situation is just the reverse of the Forward proxy situation
            //Server receives a request from the Forward Proxy 
            //Server sends back a response to the Forward Proxy
            //Server doesn't know that the Forward Proxy is a different entity from the client 
        
        //Reverse Proxy are really useful because they can do alot
            //Can use reverse proxies to filter out certain requests
            //For example, you may not want Server to deal with a certain kind of request 
            //The reverse proxy will filter those requests 

            //Reverse proxy can log stuff, analytics
            //Reverse proxy can cache things like HTML pages, to take load off of the server 

        //One of the most useful things a Reverse Proxy can do:
            //Use reverse proxy as a load balancer 
            //Load balancer - something that can distribute load, request loads, amongst a bunch of servers 
            //You may have multiple servers 
            //You can have the reverse proxy server as a load balancer to decide which server 
            //requests will go to

            //Security usage- 
                //A malicious client may issue a ton of requests 
                //Reverse proxy can distribute those requests amongst a bunch of servers 
                //So that no single server gets taken down 
            
        //NgineX - a webserver
            //Can be used as a reverse proxy 
            


        