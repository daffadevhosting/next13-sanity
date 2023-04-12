import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#9E9E9E",
    "--my-black": "#191919",
    "--my-brand": "#673AB7",
    "--my-red": "#af0202",
    "--my-yellow": "#FFC107",
    "--my-green": "#4CAF50",
};

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--my-brand"],

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    "--state-info-color": props["--my-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-brand"],
});