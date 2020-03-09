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
            //Atomicity - 

            //Consistency

            //Isolation

            //Durability

    //Database Index 

    //Strong Consistency

    //Eventual Consistency 
        //

    //Postgres - A specific technology or product you can use in your systems
        //A relational databse that uses a dialect of SQL called PostgreSQL
        //Provides ACID transactions


    
