import json
import boto3


def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb", region_name="ap-southeast-1")
    table = dynamodb.Table("orderData")

    # Scan the table to retrieve all items
    # dynamodb returns up to the maximum number of items specified by the Limit parameter
    response = table.scan()
    data = response["Items"]

    # If there are more items to scan, continue scanning until all items are retrieved
    while "LastEvaluatedKey" in response:
        response = table.scan(ExclusiveStartKey=response["LastEvaluatedKey"])
        data.extend(response["Items"])

    # Return the retrieved data
    return data
