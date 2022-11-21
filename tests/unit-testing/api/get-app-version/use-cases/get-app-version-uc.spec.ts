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
import { GetAppVersionUc } from "../../../../../core/src/api/get-app-version/use-cases/get-app-version-uc/get-app-version-uc";
import { mock } from "jest-mock-extended";
import { VersionRepositoryInterface } from "../../../../../core/src/data/repository/version/version-repository.interface";
import { GetAppVersionOutputInterface } from "../../../../../core/src/api/get-app-version/use-cases/get-app-version-uc/business-object/get-app-version-output.interface";

describe("Get AppVersion Use case", () => {
  test("should call in the method getAppVersion in version repository", async () => {
    const mockVersionRepository = mock<VersionRepositoryInterface>();
    mockVersionRepository.getAppVersion.mockResolvedValue("1.0.0");

    const uc = new GetAppVersionUc(mockVersionRepository);

    await uc.getAppVersion();

    expect(mockVersionRepository.getAppVersion).toBeCalledTimes(1);
  });
  test("should return valid use case output", async () => {
    const mockVersionRepository = mock<VersionRepositoryInterface>();
    mockVersionRepository.getAppVersion.mockResolvedValue("1.0.0");

    const expectedAppVersion: GetAppVersionOutputInterface = {
      appVersion: "1.0.0",
    };

    const uc = new GetAppVersionUc(mockVersionRepository);

    const output = await uc.getAppVersion();

    expect(output).not.toBeNull();
    expect(output).not.toBeUndefined();
    expect(output).toEqual(expectedAppVersion);
  });
});
