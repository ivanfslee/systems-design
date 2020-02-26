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
    
    //Client-Server Model + Network Protocols
        //Basically, client and server communicate with one another using network protocols
            //Network Protocol includes:
                //The kinds of messages that are sent between the machines (client and server)
                //The format of messages
                //The order of the messages if there is an order
                //A response to the messages if it is needed 
        //There are alot of different network protocols out there, the majority of which
            //in the context of systems design interview, you don't need to know about
            //The most important of which include:
                //IP
                //TCP
                //HTTP
    
    //Internet Protocol 
        //Same IP in IP Address - 'Internet Protocol Address'
        //The modern internet effectively runs on IP

        //When clients and servers send data between one another
            //They send what is known as 'ip packet'
            //Think of the IP packet as the fundamental unit of data that is send from one machine to another
            //IP Packets are made up of bytes
            //Ip packets have 2 main parts
                //1. IP header - at the beginning of the packet
                    //Header is typically small - Total size of header roughly 20 - 60 bytes
                    //Contains useful information about the packet
                        //Source IP address - ip address of machine the packet is coming from
                        //Destination IP address - ip address of machine packet is going to 
                            //Important point here is the source/destination ip address is how the information flows on the internet
                        //Total size of packet
                        //Version of IP it is using 
                            //There are multiple versions of the IP, today 2 common versions 
                                //1. IPv4 - most common
                                //2. IPv6 - used more and more
            
                //2. Data - where the data going from one machine to the other is stored
                    //Ip packets are limited in size
                        //Up to 2^16 bytes = 65,000 bytes = 0.065 megabytes
                        //Typically if you are sending email/image/etc - that will not fit in one packet 
                        //Thus, you will have multiple IP packets 
                            //It is very possible that the packets will get lost/dropped. And no gurantee the packets will reach their destination
                            //We're also not guranteeing order that the packets will be interpreted/read 
                            //Thus IP by itself has its short comings
                            //These shortcomings solved by TCP 

            //TCP - transmission control protocol
                //Built on top of IP
                    //Meant to send IP packets in an ordered way - guranteeing the packets are read by the destination machine in an ordered way
                    //And ensures packet viability - 
                    //e.g. if packets are corrupted or don't reach their destination, the protocol will know
                    //TCP increases reliability of packet transmission across the network
                    //If packets get corrupted/fail to reach their destination, you will know
                    //And be able to ensure resending of those packets 

                    //TCP solves these issues and allows sending of arbitrarily long pieces of data to other machines
                    //Does things that the IP cannot resolve by itself
                    //TCP used in virtually all webapps

                    //How TCP works on a high-level
                        //In the data portion of the IP packet, there exists:
                            //TCP header - includes information about the TCP part of the packet 
                                //includes ordering of the packets 
                            //rest of the data portion
                        //TCP handshake
                            //Is a connection between the client and destination server 
                            //A special TCP interaction where one machine contacts the other by send a packet(s) that initiate a connection
                            //The other machine says ok
                            //Client machine responds saying we are connected 

                            //Once the connection is established, both machines can freely send data to one another

                            //If one of the machines doesn't get data in a certain time period, it can get timed out
                            //If one of the machines wants to end the connection, they can do so by sending a packet indicating they want to end the connection
                //Basically, TCP is a more powerful and more functional wrapper around IP

                //What it lacks is a more robust framework
                    //TCP is just sending data in the packet
                
            //HTTP - built on top of TCP
                //introduces a higher level of abstraction
                //Request/response paradigm
                    //One machine sends a request to another machine 
                    //The second machine returns a response

                //This allows developers to develop robust and easy to maintain systems 
                    //And this is why most modern day systems use http protocol for communication
                    //HTTP - we forget about IP packets, TCP 
                    //All that we deal with are HTTP requests and responses 

                    //Requests are sent - they have properties defined by http protocol
                        //Think of requsts/response as objects
                            //Objects has fields/properties that descript thme and corresponding values 

                        //e.g. Http request example
                        const httpRequest = {
                            host: 'localhost', //host and port describe destination server 
                            port: 8080,
                            method: 'POST', //GET (retrieve data),POST (provide data to server) PUT, DELETE (ask server to delete data), etc - describe the purpose of the http request
                            path: '/payments', //server might have multiple paths. Clients interact with these paths differently. There is associated logic depending on each path 
                                                //e.g. GET request to /payments path - gets payment information from server
                                                //e.g. POST request to /payments path - initiate a payment to server 
                            headers: { //collection of key-value pairs that contain important metadata about the request
                                'content-type': 'application/json', //defines the type of the body - as JSON in this case
                                'content-length': 51, //the length of the body
                            },
                            body: '{"data": "This is a piece of data in JSON format."}' //body - is the data we are sending to the server
                        }

                        //e.g. Http response example
                        const httpResponse = {
                            statusCode: 200, //describe the type of response this is. Specific status codes mean a certain thing
                                            //e.g. 404 - requested piece of data was not found
                                            //e.g. 403 - forbidden, you don't have permission to access
                            headers: {
                                'access-control-allow-origin': 'https://www.algoexpert.io',
                                'content-type': 'application/json',
                            },
                            body: '{}'
                        }

                        //e.g. sample server using Express
                        const express = require('express');
                        const app = express();
                        
                        app.use(express.json()); //configuire it to accept JSON as data format of request bodies 

                        app.listen(3000, () => console.log('Listening on port 3000')); //server will listen to port 3000

                        //HTTP allows logic to occur once requests are received
                        //Here there is some simple logic for a get request
                        app.get('/hello', (req, res) => { //get endpoint at /hello
                            console.log('Headers:', req.headers); //console log headers of the request
                            console.log('Method:', req.method); //console log method of the request
                            res.send('Received GET request'); //return response is a string that says we got the request
                        });
                        
                        //HTTP allows logic to occur once requests are received
                        //Here there is some simple logic for a post request
                        app.post('/hello', (req, res) => { //post endpoint at /hello
                            console.log('Headers:', req.headers); 
                            console.log('Method:', req.method);
                            console.log('Body:', req.body); //console log body of the request 
                            res.send('Received POST request');
                        });
                        
                //Summary:
                //IP and TCP - transfers data
                    //low level
                    //probably won't interact with it too much as a SWE

                //HTTP - introduces opportunity to add business logic - to build some type of complicated system
                        
                        