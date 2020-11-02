// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greet_pb = require('./greet_pb.js');

function serialize_proto_GreetManyTimesRequest(arg) {
  if (!(arg instanceof greet_pb.GreetManyTimesRequest)) {
    throw new Error('Expected argument of type proto.GreetManyTimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GreetManyTimesRequest(buffer_arg) {
  return greet_pb.GreetManyTimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GreetManyTimesResponse(arg) {
  if (!(arg instanceof greet_pb.GreetManyTimesResponse)) {
    throw new Error('Expected argument of type proto.GreetManyTimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GreetManyTimesResponse(buffer_arg) {
  return greet_pb.GreetManyTimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GreetRequest(arg) {
  if (!(arg instanceof greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type proto.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GreetRequest(buffer_arg) {
  return greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GreetResponse(arg) {
  if (!(arg instanceof greet_pb.GreetResponse)) {
    throw new Error('Expected argument of type proto.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GreetResponse(buffer_arg) {
  return greet_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  // Unary
greet: {
    path: '/proto.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_proto_GreetRequest,
    requestDeserialize: deserialize_proto_GreetRequest,
    responseSerialize: serialize_proto_GreetResponse,
    responseDeserialize: deserialize_proto_GreetResponse,
  },
  // Server Streaming
greetManyTimes: {
    path: '/proto.GreetService/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: greet_pb.GreetManyTimesRequest,
    responseType: greet_pb.GreetManyTimesResponse,
    requestSerialize: serialize_proto_GreetManyTimesRequest,
    requestDeserialize: deserialize_proto_GreetManyTimesRequest,
    responseSerialize: serialize_proto_GreetManyTimesResponse,
    responseDeserialize: deserialize_proto_GreetManyTimesResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
