### Logger Design

## Pattern

I've decided to use a singleton design pattern when building the logger for this project to suggest / enforce that only a single instance of the logger object may exist per application.

## Explanation

The developer is limited to one instance of the logger per application to provide the following benefits:

- Consistency
- Centralization
- Limiting resources

Consistency: By limiting to only one instance of the logger, we ensure that the developer employs a consistent logging technique. Doing so prevents issues when logging different log levels per logger or messages being logged to different locations.

Centralization: With a singleton logger, we effectively manage and configure the logging behavior of the application from one central location. We can include setting the level, output directory, or custom formatting options. This simplifies the logging process and makes it easier to maintain over time.

Limiting resources: By using a singleton logger, we ensures that only one instance of the logger is in memory per application at any given time. This helps to reduce the resource usage of the application, especially when logging is performed frequently.
