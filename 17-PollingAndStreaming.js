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
            
    //Streaming - instead of having your client repeatedly 