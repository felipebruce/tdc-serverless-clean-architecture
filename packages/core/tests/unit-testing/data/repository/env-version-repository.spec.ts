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
import { EnvVersionRepository } from "../../../../src/common/data/repository/version/env-version-repository";

describe("Env Version Repository", () => {
  test("should read app version from environment variable", async () => {
    const envVersionRepository = new EnvVersionRepository();
    const appVersion = await envVersionRepository.getAppVersion();

    expect(appVersion).not.toBeNull();
    expect(appVersion).not.toBeUndefined();
  });
});
