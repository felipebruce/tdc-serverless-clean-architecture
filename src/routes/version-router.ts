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

import { VersionController } from "../controller/version-controller";
import express, { Request, Response } from "express";
const versionRouter = express.Router();

versionRouter.get("/", async (_: Request, res: Response) => {
  const versionController = new VersionController();
  const appVersion = await versionController.getAppVersion();

  res.send({ appVersion: appVersion }).status(200).send();
});

export { versionRouter };
