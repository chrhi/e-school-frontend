export const locales = ["en", "ar"] as const;
export const defaultLocale = "en" as const;

// Use type safe route functions
export type Locale = (typeof locales)[number];
