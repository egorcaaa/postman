pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.not.eql("Отсутствует имя покемона(name)");
});



pm.test("variable", function () {
    var response = JSON.parse(responseBody);
    pm.collectionVariables.set("pokemon_id", response.id);
});