### Cache Mechanism

## Pattern

I've decided to use redis caching to provide a suitable method of storing live scheduling data in memory while the application is running.

## Explanation

I am using Redis to provide the following benefits:

- Performance
- Low Latency
- Scalability
- Versatility

Performance: Redis cache is stored in memory, making it extremely fast and capble of highly performant data access. It is capable of serving thousands of requests per second, making it a great choice for a lot of traffic.

Low latency: Redis cache is a low latency solution because all of it's data it is stored in memory. We can retrieve data from the cache at faster speeds than retrieving data from a database.

Scalability: Redis cache is highly scalable, making it a fantastic choice for implementations that need to scale. It can handle vast amounts of data and can be distributed well across multiple nodes.

Versatility: Redis cache is a great tool that can be used for a variety of use cases. It can be used as a database, a cache, a message broker, and more. It also supports a wide variety of data types.
