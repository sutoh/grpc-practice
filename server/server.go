package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"strconv"
	"time"

	_ "github.com/jnewmano/grpc-json-proxy/codec"
	"github.com/synspective/my-grpc/api/proto"
	"google.golang.org/grpc"
)

type server struct{}

func (*server) Greet(ctx context.Context, req *proto.GreetRequest) (*proto.GreetResponse, error) {
	fmt.Printf("Greet func was invoke with %v", req)
	firstName := req.GetGreeting().GetFirstName()
	result := "Hello " + firstName
	res := &proto.GreetResponse{
		Result: result,
	}
	return res, nil
}

func (*server) GreetManyTimes(req *proto.GreetManyTimesRequest, stream proto.GreetService_GreetManyTimesServer) error {
	fmt.Printf("GreetManyTimes func was invoked with %v", req)
	firstName := req.GetGreeting().GetFirstName()
	for i := 0; i < 10; i++ {
		result := "Hello" + firstName + " number " + strconv.Itoa(i)
		res := &proto.GreetManyTimesResponse{
			Result: result,
		}
		stream.Send(res)
		time.Sleep(1000 * time.Millisecond)
	}
	return nil
}

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:58081")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()
	proto.RegisterGreetServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
