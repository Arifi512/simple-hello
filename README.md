# Welcome to your CDK TypeScript project

##Prerequisites
1- Make sure you have install latest version of AWS CLI in your system.
https://docs.aws.amazon.com/cli/v1/userguide/install-windows.html#install-msi-on-windows
2- To deploy your, you'll need access to an AWS account, and configure it with your system. To configure AWS account with your system use * 'aws configure' 
and type the access key ID and secret key and choose a default region (you can use us-east-1, eu-west-1, us-west-2 for example).
3-The AWS CDK uses Node.js (>= 10.13.0, except for versions 13.0.0 - 13.6.0). A version in active long-term support (16.x at this writing) is recommended.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
