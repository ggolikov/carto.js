
describe("config", function() {
  it("should contain links variables", function() {
    expect(cdb.config.get('cartodb_attributions')).toEqual("CARTO <a href=\"https://carto.com/attributions\" target=\"_blank\">attribution</a>");
    expect(cdb.config.get('cartodb_logo_link')).toEqual("http://www.carto.com");
  });
});
