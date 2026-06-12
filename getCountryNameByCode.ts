export const getCountryNameByCode = (
  countryCode: string,
  language: string = "en",
): string => {
  const region = new Intl.DisplayNames([language], { type: "region" });
  try {
    return region.of(countryCode.toUpperCase()) as string;
  } catch (error) {
    return `${countryCode} is not found in ${language} language. Error: ${error}`;
  }
};
