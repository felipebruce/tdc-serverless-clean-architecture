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

import { config } from "dotenv";
import { resolve } from "path";

export class EnvManager {
  private static singletonInstance: EnvManager;

  private constructor() {
    const configResult = config({ path: resolve(__dirname, '../../../../../../.env') });

    if (configResult.error)
      throw new Error("It was not possible to load .ENV file");
  }

  public static get instance(): EnvManager {
    if (!this.singletonInstance) {
      this.singletonInstance = new this();
    }

    return this.singletonInstance;
  }

  public getAppVersion(): string {
    return process.env.APP_VERSION || "";
  }
}
