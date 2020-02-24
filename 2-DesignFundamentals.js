//Systems Design Interviews are Typically Vague
    //Depends on a dialogue between you and the interviewer
    //You may need to address the following:
        //What type of system are you really building?
        //What kind of functionality your system will have to support?
        //What characteristics we will value in our system?
    //Unlike with coding interviews where your answer is more objectively correct or incorrect 
        //i.e. Your solution passes all test cases or it doesn't 
        //Systems Design interviews are typically more subjective
            //A proposed solution may not be objectively correct or incorrect 
            //It will be your job to be able to justify your design decisions 
            //Explain and rationalize why you made certain choices 
            //Why you designed your system in one way or another 
            //Why your solution is reasonable/sound/the best one  
            //Or why it may not be the best one
            //Why it may be an option amongst a number of solutions 
            //Eliminate doubts in the interviewer about your design choices 
            //You need to defend and/or adapt your position/solution if your interviewer challenges it
        
    //What are Design Fundamentals?
        //4 broad categories - that are equal, intertwined, and build on top of one another
            //1.Underlying/foundational knowledge
                //These basics are needed. Gaps will severely handicap you
                
            //2.Key characteristics of systems
                //Things you want a system to have
                //Things that have a trade-off
                    //e.g. Availability/Throughput/Redundancy/Consistency

            //3.Actual components of the system
                //More tangible things you have in a system
                //The key components that allow your system to have the key characteristics of your system
                    //e.g. load balancers/proxies/caches/rate limiting/leader election

            //4.Actual implementable technology for your components
                //Real existing products or services you can use in a system
                //To use as a component and/or use to achieve certain characteristics 
                    //e.g. zookeeper/Nginx/Redis/AmazonS3/Google Cloud Storage
                //This 4th category is often overlooked and can often differentiate you from everyone else
    