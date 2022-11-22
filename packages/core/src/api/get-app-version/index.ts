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

import { HttpStatusCode } from "../../common/http/http-status-code";
import { LambdaHelper } from "../../common/lambda/lambda-helper";
import { LambdaResultInterface } from "../../common/lambda/lambda-result.interface";
import { controller } from "./app-module";

const handler = async (): Promise<LambdaResultInterface> => {
  try {
    const bodyResponse = await controller.handler();

    return LambdaHelper.createLambdaResult(bodyResponse, HttpStatusCode.OK);
  } catch (error) {
    console.log(error);

    return LambdaHelper.createLambdaResult(
      error,
      HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};

export { handler };
