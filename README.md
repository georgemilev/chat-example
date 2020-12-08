# chat-example
Demo of a chat system using signalR



## Restoring Packages
In the integrated terminal, run the following command to install LibMan.
```
dotnet tool install -g Microsoft.Web.LibraryManager.Cli
```

Run the following command to get the SignalR client library by using LibMan. You might have to wait a few seconds before seeing output.

```
libman install @microsoft/signalr@latest -p unpkg -d wwwroot/js/signalr --files dist/browser/signalr.js --files dist/browser/signalr.min.js
```
The parameters specify the following options:

Use the unpkg provider.
Copy files to the wwwroot/js/signalr destination.
Copy only the specified files.

The output looks like the following example:
```
wwwroot/js/signalr/dist/browser/signalr.js written to disk
wwwroot/js/signalr/dist/browser/signalr.min.js written to disk
Installed library "@microsoft/signalr@latest" to "wwwroot/js/signalr"
```