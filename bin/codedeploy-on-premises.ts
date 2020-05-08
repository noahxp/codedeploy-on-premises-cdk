#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CodedeployOnPremisesStack } from '../lib/codedeploy-on-premises-stack';

const app = new cdk.App();
new CodedeployOnPremisesStack(app, 'CodedeployOnPremisesStack');
