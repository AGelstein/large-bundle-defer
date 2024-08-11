# What??
## Project Optimization: Bundle Size and Loading Performance
In this project, we tackle a common issue in Angular applications: large bundle sizes that negatively impact initial page load times. To address this, we've implemented strategies such as:

### Lazy Loading: Loads modules only when needed, reducing the initial bundle size.
### Deferred Imports: Delays the loading of heavy JavaScript libraries until they are required, further decreasing the initial load time.
These optimizations aim to enhance the performance of the application by speeding up the initial page load and improving the overall user experience.

Without deferring a heavy component
![image](https://github.com/user-attachments/assets/dcd36dfd-4aae-4630-8643-81beec9d64d6)

Deferring the heavy component load for 2.5 seconds. These triggers for when to load content can be custom if need be.
![image](https://github.com/user-attachments/assets/aca74ba6-3f4c-464a-9f84-e7e39ffcfd38)



