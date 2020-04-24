#!/usr/bin/env node

import { green } from "colors";
import { execSync } from "child_process";

console.log("Invoking my-toolchain...");

execSync("tsc", { stdio: "inherit" });
console.log(green("Success!"));
