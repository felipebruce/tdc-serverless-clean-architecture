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

import { describe, expect, test } from "@jest/globals";
import { mock } from "jest-mock-extended";
import { GetAppVersionController } from "../../../../src/api/get-app-version/get-app-version-controller";
import { GetAppVersionResponseInterface } from "../../../../src/api/get-app-version/data-transfer-object/get-app-version-response.interface";
import { GetAppVersionOutputInterface } from "../../../../src/api/get-app-version/use-cases/get-app-version-uc/business-object/get-app-version-output.interface";
import { GetAppVersionUcInterface } from "../../../../src/api/get-app-version/use-cases/get-app-version-uc/get-app-version-uc.interface";

describe("Get App Version Controller", () => {
  test("should return valid output", async () => {
    const mockReturnValue: GetAppVersionOutputInterface = {
      appVersion: "1.0.0",
    };
    const expectedControllerOutput: GetAppVersionResponseInterface = {
      appVersion: "1.0.0",
    };
    const uc = mock<GetAppVersionUcInterface>();
    uc.getAppVersion.mockResolvedValueOnce(mockReturnValue);

    const versionController = new GetAppVersionController(uc);

    const controllerOutput = await versionController.handler();

    expect(controllerOutput).not.toBeNull();
    expect(controllerOutput).not.toBeUndefined();
    expect(controllerOutput).toEqual(expectedControllerOutput);
  });
});
