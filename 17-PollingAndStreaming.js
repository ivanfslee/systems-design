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
    
    //Polling - 