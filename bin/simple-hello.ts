#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleHelloStack } from '../lib/simple-hello-stack';
import 'source-map-support/register';

const app = new cdk.App();
new SimpleHelloStack(app, 'SimpleHelloStack', {
    env:{
        region: 'us-east-1'
    }
});
