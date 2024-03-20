//Question# 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Default counrty.'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('America');
