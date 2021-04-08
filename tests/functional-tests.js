/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function() {
  
    suite("GET /api/whoami => object", function() {
      test("Who Am I?", function(done) {
            chai
          .request(server)
          .get("/api/whoami")
          .end(function(err, res) {
            //console.log(res);
            assert.equal(res.status, 200);
            var jsonRes = JSON.parse(res.text);
            assert.isObject(jsonRes);
            assert.hasAnyKeys(jsonRes, ['ip', 'software', 'language']);
            done();
          });
      });

  });
});