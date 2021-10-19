import * as grpc from "@grpc/grpc-js";

let url: string;
if (process.env.PORT) {
  url = isNaN(Number(process.env.PORT))
    ? process.env.PORT
    : `127.0.0.1:${process.env.PORT}`;
} else {
  url = "localhost:50051";
}

const client = new grpc.Client(url, grpc.credentials.createInsecure());
client.waitForReady(new Date().getTime() + 10000, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  process.exit();
});
