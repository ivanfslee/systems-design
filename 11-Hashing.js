//Key Terms
    //Hashing Function
        //A function that takes in a specific data type (e.g. string or an identifier)
        //and outputs a number

        //Different inputs MAY result in the same output
        //but a good hash function will attempt to minimize those 
        //'hashing collisions' (which is the same as maximizing 'uniformity')

    //Load Balancer

    //Consistent Hashing
        //A type of hashing that minimizes the number of keys that need to be remapped when a hash 
        //table gets resized

        //Often used by load balancers to distribute traffic to servers
        //It minimizes the number of requests that get forwared to different servers
        //when new servers are added or when existing servers are brought down

    //Rendezvous Hashing 
        //A type of hashing also coined 'highest random weight' hashing
        //Allows for minimal re-distribution of mappings 
        //when a server goes down

    //SHA
        //Secure Hash Algorithm
        //The SHA is a collection of cryptographic hash function used in the industry.
        //Today, SHA-3 is a popular choice to use in a system