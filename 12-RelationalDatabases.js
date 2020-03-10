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
        //Can perform powerful queries on the data of the SQL db





