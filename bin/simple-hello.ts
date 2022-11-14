#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleHelloStack } from '../lib/simple-hello-stack';

const app = new cdk.App();
new SimpleHelloStack(app, 'SimpleHelloStack');
