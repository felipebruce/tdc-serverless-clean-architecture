/*
 * Copyright (c) 2022  Felipe Rocha Bruce
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";import { Stack, StackProps } from "aws-cdk-lib";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new Function(this, "GetAppVersionHandler", {
      runtime: Runtime.NODEJS_14_X, 
      code: Code.fromAsset('../packages/core/dist/src'),
      environment: {
        APP_VERSION: '1.0.0',
      },
      handler: "api/get-app-version/index.handler",
    });

    const api = new apigateway.RestApi(this, "app-version-api", {
      restApiName: "TDC app version api",
      description: "This service serves versions."
    });

    const getApiVersionIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", getApiVersionIntegration);
  }
}
