import Ts from "rollup-plugin-typescript2";

export default {
  input: ["./packages/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [Ts()],
  preserveModules: true,
  external: ["react"],
};
