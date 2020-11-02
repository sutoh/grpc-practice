// package: proto
// file: greet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Greeting extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): Greeting;

    getLastname(): string;
    setLastname(value: string): Greeting;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Greeting.AsObject;
    static toObject(includeInstance: boolean, msg: Greeting): Greeting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Greeting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Greeting;
    static deserializeBinaryFromReader(message: Greeting, reader: jspb.BinaryReader): Greeting;
}

export namespace Greeting {
    export type AsObject = {
        firstname: string,
        lastname: string,
    }
}

export class GreetRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetRequest): GreetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetRequest;
    static deserializeBinaryFromReader(message: GreetRequest, reader: jspb.BinaryReader): GreetRequest;
}

export namespace GreetRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetResponse): GreetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetResponse;
    static deserializeBinaryFromReader(message: GreetResponse, reader: jspb.BinaryReader): GreetResponse;
}

export namespace GreetResponse {
    export type AsObject = {
        result: string,
    }
}

export class GreetManyTimesRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetManyTimesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesRequest): GreetManyTimesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesRequest;
    static deserializeBinaryFromReader(message: GreetManyTimesRequest, reader: jspb.BinaryReader): GreetManyTimesRequest;
}

export namespace GreetManyTimesRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetManyTimesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetManyTimesResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesResponse): GreetManyTimesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesResponse;
    static deserializeBinaryFromReader(message: GreetManyTimesResponse, reader: jspb.BinaryReader): GreetManyTimesResponse;
}

export namespace GreetManyTimesResponse {
    export type AsObject = {
        result: string,
    }
}
