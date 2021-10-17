#!/bin/bash

grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./lib \
--js_out=import_style=commonjs:./lib \
--grpc_out=grpc_js:./lib \
-I ./protos \
./static/protos/*.proto