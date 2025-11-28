import { defineConfig } from "sanity";
import { settings } from "./config.define";
import { RobotIcon, RocketIcon } from "@sanity/icons";
import themes from "./themes";

export default defineConfig([settings(process.env.SANITY_STUDIO_DATASET!, process.env.SANITY_STUDIO_PROJECT_ID, themes.production, RocketIcon), settings("staging", process.env.SANITY_STUDIO_PROJECT_ID, themes.staging, RobotIcon)]);
