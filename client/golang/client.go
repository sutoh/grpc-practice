package main

import (
	"context"
	"fmt"
	"io"
	"log"

	"github.com/synspective/my-grpc/api/proto"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("Hello. Im a client")
	con, err := grpc.Dial("127.0.0.1:58081", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Could not connnect: %v", err)
	}
	defer con.Close()

	c := proto.NewGreetServiceClient(con)
	// doUnary(c)
	doServerStreaming(c)
}

func doServerStreaming(c proto.GreetServiceClient) {
	fmt.Println("Starting to do a Server Streaming RPC ...")
	req := &proto.GreetManyTimesRequest{
		Greeting: &proto.Greeting{
			FirstName: "tanaka",
			LastName:  "tarou",
		},
	}
	resStream, err := c.GreetManyTimes(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling GreetManyTImes RPC: %v", err)
	}
	for {
		msg, err := resStream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("error while reading stream: %v", err)
		}
		log.Printf("Response from GreetManyTImes: %v", msg.GetResult())
	}

}

func doUnary(c proto.GreetServiceClient) {
	fmt.Println("Starting to do a Unary RPC ...")
	req := &proto.GreetRequest{
		Greeting: &proto.Greeting{
			FirstName: "tanaka",
			LastName:  "tarou",
		},
	}

	res, err := c.Greet(context.Background(), req)
	if err != nil {
		log.Printf("error while calling greet rpc: %v", err)
	}

	fmt.Printf("Response from greet server %v", res)
}
