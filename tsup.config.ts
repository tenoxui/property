import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "iife"],
  entry: ["./src/*.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true,
});
