//Key Terms
    //Socket
        //A kind of file that acts like a stream.
        //Processes can read and write to sockets and communicate in this manner. 
        //Most of the time, the sockets are fronts for TCP connection.
    
    //Polling
        //The act of fetching a resource or piece of data regularly at an interval
        //to make sure your data is not too stale.
    
    //Streaming
        //In networking, it usually refers to the act of continuously 
        //getting a feed of information from a server by keeping an 
        //open connection between the two machines or processes.
    
//So far, we have dealt with systems where clients have issued requests to servers
//And servers send response back to the client

//What happens if our system has clients that want a piece of data
//that gets updated/changes regularly
    //e.g. a system that monitors the temperature outside 
    //The temperature changes alot
    //Your servers need to know the temperature
    //Your clients need to be served the temperature

    //e.g. a chat app
    //You have people who are meant to be able to communicate with each other
    //in real-time
    //You need to be able to send and receive messages in real-time

//In both these examples, you are dealing with data 
//that gets updated regularly
//and clients need to be able to see regularly

//How to build a system to reflect these updates?
    //2 techniques to achieve this
        //Polling
        //Streaming
    
    //Polling - client issues a request for data it wants on a recurring basis
        //following some set interval of time
        //The server then sends back a response

        //Clients -> every X seconds -> servers
        //        <-                 <-
        
        //You could use this with the temperature use case
        //Client can issue a request to the server every 30 seconds to get the temperature

        //Limitations of Polling:
            //Chatting will not work with polling
            //If you send a message to someone or someone wants to send a message to you
            //You want to be able to receive the message right away
            //You need the instantaneous aspect for chatting 

            //So polling would not be a use case for chatting implementation
            //One possibility is if you use polling with a very very short time interval like 0.5 seconds

            //The tradeoff is of having alot of load on your servers

            //You might poll every 0.1 second (10 times a second)

            //If you want to scale this and have millions of users, 
            //with each user polling 10 times a second, that would
            //be millions of requests per second
            //which is alot of load for your servers
            
    //Streaming - instead of having your client repeatedly request data from server
        //Client will open a long-lived connection with your server
        //This is done through a socket - 

        //socket - a file that lives on your computer, that your comp can write to and read from
            //to communicate with another computer
            //in a long-lived connection capacity

            //You can think of a socket as a portal into another computer
            //That you can communicate through

            //Without having to repeatedly send requests

            //Just an open connection between 2 machines that exist as long as neither
            //machine closes it or so long as the network is healthy

            //Client opens a long-lived connection with a socket
            //and listens to your server for any data that your server might push to it

            //Server will push data (in the case of chat application)
                //Server pushes the messages through the connection to your client
                //and that will be the streaming in action
            
            //So your client will be streaming data from the server

            //The key point is unlike with polling where the client is the one requesting data
                //and the server is only sending data only when it receives request from the client
                //In streaming, your client is just listening to the server
                    //It is the servers job to send the data out to the client
                    //The server is no longer passively listening to requests
                    //The server will proactively send data to the client

                    //'Pushing' - refers to server sending data to client
                        //Server, instead of passively listening to requests from client
                        //Server will proactively push data to the client

             //Client <<----- Server

             //Streaming allows for a continous stream of data

            //In the case of the chat app, streaming allows:
                //allows clients to continuously receive messages (without repeatedly request them from server)
                //so long as server correctly pushes messages to client
            
                //You can attain the instantaneous aspect of your chat app
                    //without having alot of requests
                    //just one long-lived connection per client
            
    //Important note:
        //Streaming is not necessarily better than polling

        //For the chat app - streaming is better than polling

        //Depending on your use-case
            //Polling might be better than streaming
            //Or streaming might be better than polling
        
        //Your job in a systems design interview, you need to figure out
            //out what functionality your system will support 
            //and to then decide how best to implement those functions (polling, streaming, or neither)

            //General rule of thumb - if you need some kind of instantaneous experience
                //or you need data updated very frequently
                //You are likely going to use streaming
            
                //If you need data updated not too frequently
                    //e.g. every 20 seconds
                    //Polling might be useful
        //11:24