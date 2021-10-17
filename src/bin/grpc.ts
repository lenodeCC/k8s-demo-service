import * as grpc from "@grpc/grpc-js";

import { GreeterService } from "../../lib/hello_grpc_pb";

import GreeterServiceImplementation from "../implementations/greeter";

var server = new grpc.Server();
server.addService(GreeterService, GreeterServiceImplementation);

const port = process.env.PORT ?? "0.0.0.0:50051";
server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log(`listen on port:${port}`);
});
