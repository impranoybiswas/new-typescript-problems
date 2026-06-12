export const getBanglaCountryName = (countryCode: string): string => {
  const regionNames = new Intl.DisplayNames(["bn"], { type: "region" });
  try {
    return regionNames.of(countryCode.toUpperCase()) || countryCode;
  } catch (error) {
    console.error(error);
    return countryCode;
  }
};
