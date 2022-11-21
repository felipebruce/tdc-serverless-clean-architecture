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

import express, { Request, Response } from "express";
import { GetAppVersionResponseInterface } from "core/src/api/get-app-version/data-transfer-object/get-app-version-response.interface";
import { HttpStatusCode } from "core/src/http/http-status-code";
import { handler as getApiVersionHandler } from "../../core/src/api/get-app-version/index";

const versionRouter = express.Router();

versionRouter.get("/", async (_: Request, res: Response) => {
  try {
    let bodyObj;
    const appVersion = await getApiVersionHandler();
    const { body, statusCode } = appVersion;

    if (statusCode === HttpStatusCode.OK) {
      bodyObj = JSON.parse(body) as GetAppVersionResponseInterface;
      res.send({ appVersion: bodyObj.appVersion }).status(statusCode).send();
    } else {
      res.send(body).status(statusCode).send();
    }
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send();
  }
});

export { versionRouter };
