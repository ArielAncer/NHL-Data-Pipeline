### Message Broker

## Pattern

I've decided to use a message broker to provide a reliable method of scaling out our data ingest pipeline and to enable real time processing of our NHL data.

## Explanation

I am using Kafka to provide the following benefits:

- Raliability
- Scalability
- A Decoupled Approach

Raliability: Kafka provides us with a fault tolerant system that can handle a large volume of data and one that allows us to replicate the provessing of said data in the case of a failure.

Scalability: Kafka has been proven to be able to handle large volumes of data without any negative impact on performance which makes this a good option for our project as the data is time sensitive. Furthermore, we can scale our system horizontally as is needed by adding more brokers to the cluster.

Decoupled: Data can be ingested and stored in Kafka without starting the downstream processing right away thereby allowing for a more flexibile downstream process.
