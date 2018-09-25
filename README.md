**Using SAM to create and deploy lambda and Aurora**

Followed instructions from https://docs.aws.amazon.com/lambda/latest/dg/serverless-deploy-wt.html

- Open cloud 9.

- Upload files in this repo.

- npm install

- Create a bucket where code will reside : `aws s3 mb s3://ts-serverless-app --region us-east-1`

```sam package --template-file example.yaml --output-template-file serverless-output.yaml --s3-bucket ts-serverless-app```

```aws cloudformation deploy --template-file /home/ec2-user/environment/serverless-node/serverless-output.yaml --stack-name serverless-stack --capabilities CAPABILITY_IAM```
