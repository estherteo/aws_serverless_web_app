import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("orderData")


def lambda_handler(event, context):
    # Extract values from the event object
    order_id = event["orderID"]
    name = event["name"]
    category = event["category"]
    price = event["price"]

    # Write data to the DynamoDB table
    response = table.put_item(
        Item={"orderID": order_id, "name": name, "category": category, "price": price}
    )

    # Return a properly formatted JSON object
    return {
        "statusCode": 200,
        "body": json.dumps("Order information saved successfully!"),
    }
