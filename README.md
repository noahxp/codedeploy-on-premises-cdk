# CodeDeploy on-premises setup

## The following resources will be created

- Create S3 bucket, save the deployment files.
- Create IAM User for On-Premises Instance
- Create CodeDeploy Application
- Create CodeDeploy DeploymentGroup
- Register the On-Premises Instance with CodeDeploy (IAM User ARN)
- Tag the On-Premises Instance

## Useful commands

- `npm run build`   compile typescript to js
- `npm run watch`   watch for changes and compile
- `npm run test`    perform the jest unit tests
- `cdk bootstrap`   deploys the CDK toolkit stack into an AWS environment, when first time using cdk
- `cdk deploy`      deploy this stack to your default AWS account/region
- `cdk diff`        compare deployed stack with current state
- `cdk synth`       emits the synthesized CloudFormation template
- `cdk destroy`     destroy the cfn stack
