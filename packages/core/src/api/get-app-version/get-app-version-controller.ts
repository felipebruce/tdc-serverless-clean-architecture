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

import { GetAppVersionResponseInterface } from "./data-transfer-object/get-app-version-response.interface";
import { GetAppVersionUcInterface } from "./use-cases/get-app-version-uc/get-app-version-uc.interface";
import { GetAppVersionResponse } from "./data-transfer-object/get-app-version-response";

export class GetAppVersionController {
  public constructor(private getAppVersionUC: GetAppVersionUcInterface) {}

  public async handler(): Promise<GetAppVersionResponseInterface> {
    const appVersionFromUC = await this.getAppVersionUC.getAppVersion();
    const { appVersion } = appVersionFromUC;

    return GetAppVersionResponse.createResponse(appVersion);
  }
}
