import { Inject, InjectionToken } from "@angular/core";
import { pathConfig } from "./Models/path-config";

export const PATH_CONFIG = new InjectionToken<pathConfig>('path.config');