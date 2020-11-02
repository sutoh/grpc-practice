import { GreetServiceClient, IGreetServiceClient  } from './greet_grpc_pb'
import { credentials } from 'grpc';
import { Greeting, GreetRequest, GreetResponse } from './greet_pb'


const client: IGreetServiceClient = new GreetServiceClient(
  `localhost:58081`,
  credentials.createInsecure()
);

const request: GreetRequest = new GreetRequest();
const greeting: Greeting = new Greeting();
greeting.setFirstname("aaa");
greeting.setLastname("bbb");
request.setGreeting(greeting)

client.greet(request, (err: any, response: GreetResponse) => {
  if (err != null) {
    console.log(err)
    return
  }
  if(response === undefined ){
    console.log("no data.")
  } else {
    console.log(response.getResult())
  }
});