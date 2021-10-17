npx grpc_tools_node_protoc ^
--plugin=protoc-gen-ts=%CD%\node_modules\.bin\protoc-gen-ts.cmd ^
--ts_out=grpc_js:%CD%\lib ^
--js_out=import_style=commonjs:%CD%\lib ^
--grpc_out=grpc_js:%CD%\lib ^
-I %CD%\static\protos ^
%CD%\static\protos\*.proto