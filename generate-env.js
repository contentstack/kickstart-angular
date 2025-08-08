#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Read .env file
const envPath = path.join(__dirname, ".env");
let envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
}

// Generate environment.ts content
const environmentContent = `export const environment = {
  production: false,
  contentstack: {
    apiKey: '${envVars.NG_APP_CONTENTSTACK_API_KEY || ""}',
    deliveryToken: '${envVars.NG_APP_CONTENTSTACK_DELIVERY_TOKEN || ""}',
    previewToken: '${envVars.NG_APP_CONTENTSTACK_PREVIEW_TOKEN || ""}',
    environment: '${envVars.NG_APP_CONTENTSTACK_ENVIRONMENT || "preview"}',
    region: '${envVars.NG_APP_CONTENTSTACK_REGION || "EU"}',
    preview: ${envVars.NG_APP_CONTENTSTACK_PREVIEW === "true"},
  }
};
`;

// Generate environment.production.ts content
const environmentProdContent = `export const environment = {
  production: true,
  contentstack: {
    apiKey: '${envVars.NG_APP_CONTENTSTACK_API_KEY || ""}',
    deliveryToken: '${envVars.NG_APP_CONTENTSTACK_DELIVERY_TOKEN || ""}',
    previewToken: '${envVars.NG_APP_CONTENTSTACK_PREVIEW_TOKEN || ""}',
    environment: '${envVars.NG_APP_CONTENTSTACK_ENVIRONMENT || "preview"}',
    region: '${envVars.NG_APP_CONTENTSTACK_REGION || "EU"}',
    preview: ${envVars.NG_APP_CONTENTSTACK_PREVIEW === "true"},
  }
};
`;

// Write the files
fs.writeFileSync(
  path.join(__dirname, "src/environments/environment.ts"),
  environmentContent
);
fs.writeFileSync(
  path.join(__dirname, "src/environments/environment.production.ts"),
  environmentProdContent
);

console.log("Environment files generated successfully!");
