import { HelloRequest, HelloReply } from "../../lib/hello_pb";
import * as grpc from "@grpc/grpc-js";
import { UntypedServiceImplementation } from "@grpc/grpc-js";
import { hostname } from "os";

const hn = hostname();
class GreeterServiceImplementation implements UntypedServiceImplementation {
  [name: string]: grpc.UntypedHandleCall;
  sayHello(
    call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
    callback: grpc.sendUnaryData<HelloReply>
  ) {
    const reply = new HelloReply();
    reply.setMessage(`Hello ${call.request.getName()}, this is ${hn}`);
    callback(null, reply);
  }
}

export default new GreeterServiceImplementation();
