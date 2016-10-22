$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    $('#amz-btn').attr('href', 'http://www.amazon.' + getAmazonTldForCountry(data.countryCode));
  });

  function getAmazonTldForCountry(cc) {
    if ($.inArray(cc, ["DE", "AT", "CH", "NL", "PL", "BG", "CZ", "DK", "LU", "HU", "SI"]) > -1) {
      return 'de';
    } else if ($.inArray(cc, ["ES", "PT"]) > -1) {
      return 'es';
    } else if ($.inArray(cc, ["BE", "EE", "IE", "EL", "HR", "CY", "LV", "LT", "MT", "RO", "FI", "SE", "UK"]) > -1) {
      return 'co.uk';
    } else if ($.inArray(cc, ["JP"]) > -1) {
      return 'JP';
    } else if ($.inArray(cc, ["FR", "IT", "CA"]) > -1) {
      return cc.toLowerCase();
    } else {
      return 'com';
    }
  }