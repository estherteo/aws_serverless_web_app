# Deploying Serverless Web Application on AWS using S3 and Cloudfront

## Application Overview
This application is a simple Order Management System that allows users to input their orders and view a list of all saved orders. 

## Technical Implementation
An S3 bucket was used to host static web content such as HTML and JS files. An API Gateway was also configured to trigger Lambda functions for handling GET and POST requests to interact with a DynamoDB database. Lastly, the application was deployed on Cloudfront to be more secure with reduced latency. 

## Application Interface
**Order Form**
![telegram-cloud-photo-size-5-6129811706520650217-y](https://github.com/user-attachments/assets/c8a9824e-e7eb-4ad7-aa9b-b34675a038f7)  

**View All Orders**
![telegram-cloud-photo-size-5-6129811706520650204-y](https://github.com/user-attachments/assets/9ebcf417-f532-4d94-b7ce-45cb9c3282c0)

## AWS Architecture
![get_order (1)](https://github.com/user-attachments/assets/aad82285-1965-424d-92a1-b96b7908e486)

## Services used:

- Amazon API Gateway: Deployed REST API (GET & POST) that triggers the Lambda function, enabling communication between the user and backend.
- AWS Lambda: Executes the function to retrieve data from DynamoDB and insert new data into it.
- AWS Identity and Access Management (IAM): Grants necessary permissions for the Lambda function to write results to DynamoDB.
- Amazon DynamoDB: Stores order data that can be retrieved by the Lambda function.
- Amazon CloudFront: Deployed as a content delivery network (CDN) to serve S3 content securely over HTTPS, providing encryption in transit and improving the performance of the application.


