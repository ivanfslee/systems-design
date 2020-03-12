//Key Terms
    //Databases
        //Databases are programs that either use disk or memory to do 2 core things:
            //1. Record data
            //2. Query data
        //In general, databases are themselves servers that are long lived 
        //and interact with the rest of your application through network calls
        //With protocols on top of TCP or even HTTP

        //Some databases only keep records in memory
        //And users of such databases are aware that those records
        //may be lost forever if the machine or process dies

        //Generally speaking though, databases need peristence of those records.
        //That is, databases need to store the data for long periods of time.
        //And thus cannot use memory. 
        //This means, you have to write your data to disk. 
        //Anything written to disk will remain through power loss or network partitions.
        //So that is what is used to keep permanent records.

        //Since machines die often in a large scale system, special disk partitions
        //or volumes are used by the database processes, and those volumes can 
        //get recovered even if the machine were to go down permanently

    //Disk
        //Usually refers to either HDD (hard-disk drive) or SSD (solid-state drive).
        //Data written to disk will persist through power failures and general machine crashes.
        //Disk is also referred to as 'non-volatile storage'.

        //SSD is far faster than HDD (recall latencies video/notes)
        //But SSD is also far more expensive from a financial standpoint.

        //Because of that, HDD will typically be used for data that's rarely accessed or updated, 
        //but that's stored for a long time, and SSD will be used for data that is frequently accessed and updated.

    //Memory
        //Short for 'Random Access Memory' (RAM). Data stored in memory will be lost
        //when the process that has written that data, dies.

    //Relational Database
        //A type of structured database in which data is stored following a tabular format
        //Often supports powerful querying using SQL    

    //Non-Relational Database
        //In contrast to relational databases (SQL databses).
        //A type of db that is free of imposed, tabular-like structure.
        //Non-relational db are often referred to as 'NoSQL databases'.

    //SQL
        //Structured Query Language
        //Relational databases can be used using a derivative of SQL such as
        //PostgresSQL in the case of Postgres

    //SQL Database
        //Any database that supports SQL.
        //This term is often used interchangably with 'Relational Database'
        //Though, in practice, not every relational database supports SQL

    //NoSQL Database
        //Any database that is not SQL compatible is called NoSQL

    //ACID Transaction
        //A type of database transaction that has four important properties
            //Atomicity - The operations that constitute the transaction will either 
                //all succeed or all fail. There is no in-between state

            //Consistency - The transaction cannot bring the database to an invalid state.
                //After the transaction is committed or rolled back, the rules for each
                //record will still apply, and all future transactions will see the
                //effect of the transaction. Also named Strong Consistency.

            //Isolation - The execution of multiple transactions concurrently will
                //have the same effect as if they had been executed sequentially

            //Durability - Any committed transaction is written to non-volatile storage.
                //It will not be undone by a crash, power loss, or network partition

    //Database Index 
        //A special auxiliary data structure that allows your db to perform certain queries much faster.
        //Indexes can typically only exist to reference structured data, like data stored in relational databases.
        //In practice, you create an index on one or multiple columns in your database to greatly speed up read 
        //queries that you run very often, with the downside of slightly linger writes to your db
        //since writes have to also take place in the relevant idnex.

    //Strong Consistency
        //Strong Consistency usually refers to the consistency of ACID transactions, as opposed to Eventual Consistency

    //Eventual Consistency 
        //A consistency model which is unlike Strong Consistency. 
        //In this model, reads might return a view of the system that is stale. 
        //An eventually consistency datastore will give guarantees that the state of teh database will eventually 
        //reflect writes within a time period (could be 10 seconds, or minutes).

    //Postgres - A specific technology or product you can use in your systems
        //A relational databse that uses a dialect of SQL called PostgreSQL
        //Provides ACID transactions

//Storage video 
    //100s of different databases that specialize in certain things 
    //Hard to generalize/categorize them

//One major db characteristic
    //Structure imposed on the data stored in the db
    //Relational Database vs. Non-Relational Databases
    //Relational Database imposes on the data a tabular-like structure
        //In other words, the data is stored in a table 
        //table = 'relations'

    //customer_name   processed_at  amount
    //clement          2019-12-01     10
    //antoine          2019-11-16    200
    //simon            2020-02-02   9001

    //each row is a payment/entity/record
    //each column is a property of the entity
    //relational databases keyword is 'structure'

    //schema - definition of the structure of the relational db

    //non-relational db - doesn't impose a structure on the data
    
    //most (not all) relational db support SQL (Structured Query Language)
        //Can perform powerful queries on the data of the relational db
        //It is because of this that you would use a relational db over a non-relational db

        //Typically, SQL and relational db are used interchangably 

        //SQL as field can be complicated and contain alot of depth
        //In the context of systems design interviews, you dont need to be an expert

        //Because you can perform powerful queries, people will use relational db over non-relational db

    //Early on algoexpert just started, they relied on google cloud datastore as one of their primary databases
        //google cloud datastore is a noSQL database (non-relational database)
        //as a result, they ran into alot of issues involving querying
        //They were storing user events
            //e.g. when user runs code on algo expert
            //when user makes a payment 
        
        //When they went to query these events, they had a hard time querying even the simplest of events

        //note: non-relational databases will typically have their own querying languages
            //google cloud datastore query language did not support some queries that Clement needed to do
    
        //As a result of the limitations of google cloud datastore, they moved to PostGres

        //You may ask if you can use python to code some queries of the data
        //To do this, you would have to load the data into memory.
        //The problem is that with large-scale system, you may be dealing with terabytes of data
        //Those terabytes will need to be loaded into memory which is difficult/impossible

        //That is the power of SQL. 
            //You can perform these queries directly in the database
            //Without having to load the data into memory
    
    //SQL Database, must use ACID transactions
        //ACID
            //ACID transaction - an operation in a database that has 4 properties
                //Atomicity - if an operation contains multiple suboperations
                    //canonical example is a database transaction from one bank account to another bank account
                        //This would involve 2 transactions
                        //1 deduction from one account
                        //1 addition to another account
                    //if there are multiple suboperations, these operations in totality will be considered a unit
                    //if there is any issue with any suboperation or the transaction, the entire transaction fails
                    //Only if all sub operations succeed does the entire transaction succeed

                    //So it is an all or nothing concept 

                //Consistency - any transaction in the db will conform to and abide by all the rules in the db
                    //any future transaction in the database will take into account any past transactions in the db
                    //You can think about like there will be no stale transactions in the database

                    //That is, one transaction will know about all the other transactions

                //Isolation - multiple transactions can occur at the same time
                    //but they will occur as if they had been done sequentially
                    //like, they've been put in a queue and then executed one at a time

                //Durability - when you make a txn in the db, the effects of the txn is permanent
                    //another way to think about it is that data in the db 
                    //is effectively stored on disk
    
    //Database Index 
        //Imagine you want to look for the name of the customer with the largest amount paid

        //You would have to go through each item in the db (At first glance, this may seem like a O(N) linear time operation)

        //If you are dealing with db with millions of rows of data, this operation will take a long time
        //Especially if you are doing alot of these look ups as well

        //Database Index may seem simple enough, but under the hood, they are quite complicated
            //outside of the scope of this lecture
            //Alot of different types 
            //and ways they are implemented under the hood
            //There are bitmap indexes , reverse indexes, etc

        //We will have high level over view of database index 

        //Database Index is an auxiliary data structure in the db
            //It is optimized for fast searching on a specific attribute in a column
            //Long story short, Database Index speeds up read queries on the db significantly
        
        //Why would a database index speed up your db searching alot?
            //imagine the small table we have above
            //Lets say we have the amounts column stored in an auxiliary data structure in SORTED order
            //Each amount points to their respective rows in the database

            //The analogy then is that the database index acts as a 'table of contents' for the database

            //Where the contents are ordered in a way that make them easy to search through

            //You can think of it like they point to the place where the main data is stored

            //In this particular example, you can imagine that you can perform a binary search on the amounts database index
            //to find the amount you are looking for, which would then point to the particular row in the database

            //You would effectively make what would typically be a linear time operation into a log time or constant time operation

            //The trade off for having a database index is that it is an auxiliary data structure
            //which uses additional space and when you write write data into the table/db that has a database index
            //you will be taking more time to write the data into the db AND the database index

            //So your write operations will be a little slower and you will be using up more space
            //but your read operations will be a lot faster 

    //Summary:
        //Key points are to know the difference between relational and non-relational db
        //The power of SQL and database indexing 
        //ACID transactions 

        //When you make decisions about what kind of db you use 
        //DB selection is very important in systems design
            //Algoexpert was using google cloud datastore
            //There were many issues they ran into
                //1. couldn't query what they wanted
                //2. only has 'eventual consistency'
                    //They would make changes to the db
                    //but they wouldn't see those changes reflected in the db immediately
                    //The data was sometimes stale. 
                    //This went against ACID transactions properties
                    //They really needed 'Strong Consistency'
                    //They couldn't keep using Eventual consistency that google cloud datastore provided
                    //Subequently they migrated their data to SQL