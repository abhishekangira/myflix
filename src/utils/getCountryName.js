export default function getCountryName(countryCode) {
  switch (countryCode) {
    case "US":
      return "United States";
    case "GB":
      return "Britain";
    case "CN":
      return "China";
    case "JP":
      return "Japan";
    case "AU":
      return "Australia";
    default:
      return "NA";
  }
}
