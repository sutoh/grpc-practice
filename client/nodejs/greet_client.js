const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
var PROTO_PATH = __dirname + '/../../api/proto/greet.proto';
// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });

var proto = grpc.loadPackageDefinition(packageDefinition).proto;

function main() {
  var client = new proto.GreetService('127.0.0.1:58081', grpc.credentials.createInsecure());
  // Single
  client.Greet({greeting: {FirstName: 'you', LastName: 'Me'}}, function(err, response) {
    console.log('Greeting:', response.result);
  });

  // Streaming
  call = client.GreetManyTimes({greeting: {FirstName: 'you', LastName: 'Me'}});
  var l = [];
  call.on('data', function(feature) {
    console.log('Found feature called ', feature);
    l.push(feature.result)
  });
  call.on('end', function() {
    console.log("Response from GreetManyTimes", l);
    // The server has finished sending
  });
  call.on('error', function(e) {
    // An error has occurred and the stream has been closed.
    console.log("error while reading stream:", e);
  });
  call.on('status', function(status) {
    // process status
  });
}
main();