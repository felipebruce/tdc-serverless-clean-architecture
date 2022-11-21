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

import { EnvVersionRepository } from "core/src/data/repository/version/env-version-repository";
import { GetAppVersionController } from "./get-app-version-controller";
import { GetAppVersionUc } from "./use-cases/get-app-version-uc/get-app-version-uc";

const versionRepository = new EnvVersionRepository();
const getAppVersionUC = new GetAppVersionUc(versionRepository);

const controller = new GetAppVersionController(getAppVersionUC);

export { controller };
