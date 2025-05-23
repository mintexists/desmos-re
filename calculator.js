import inner from "./inner.js";

var desmosEnabledFeatures = {
  "GraphingCalculator": true,
  "FourFunctionCalculator": true,
  "ScientificCalculator": true,
  "GeometryCalculator": true,
  "Calculator3D": true,
};
var desmosVersion = "v1.10.1";
var desmosCommit = "dc3b51642fefe7117023dd09be55e59c7040ebdc";

var Desmos = {};
if (!Desmos.config) Desmos.config = {};

if (typeof desmosEnabledFeatures === "object") {
  Desmos.enabledFeatures = desmosEnabledFeatures;
}

if (typeof desmosLocales === "object") Desmos.locales = desmosLocales;
if (typeof desmosLocaleData === "object") {
  Desmos.localeData = desmosLocaleData;
}
if (typeof desmosCommit === "string") Desmos.commit = desmosCommit;
if (typeof desmosVersion === "string") Desmos.version = desmosVersion;

inner();
