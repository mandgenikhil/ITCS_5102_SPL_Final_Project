# ITCS_5102_SPL_Final_Project : How to Run Doc
[YSTWApp] Static app hosted.

Please find the below major steps and required packages to develop this application.

[Github] All the required code.

### Step 1 : Install Golang and required packages
[Golang]

Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency
Golang Packages :

- [Gin]
- [AzureSKD]

Run the following command from back-end folder
```sh
go run main.go
```


### Step 2 : Install Node js and install required packages

[Nodejs]

Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
NPM packages list:

Install required packages and run following commands from back-end/azure-api folder

```sh
npm install
```
```sh
ndoe index.js
```
### Step 3 : Azure Speech Translation Subscription
Got to [AzureSKD] and subscribe for congnitive service for Azure translation.
Note: We need to get Azure Speech Tranlation Cognitive service subscription enabled. Currently it's paid subscription used in this project.

### Step 4 : Go to http://localhost:8081
After running the application, go to this URL and use the application

[Github]: <https://github.com/mandgenikhil/ITCS_5102_SPL_Final_Project.git>
[Golang]: <https://go.dev/>
[Nodejs]: <https://nodejs.org/en/>
[Gin]: <https://gin-gonic.com/docs/quickstart/>
[AzureSKD]: <https://azure.microsoft.com/en-us/products/cognitive-services/speech-translation/>
[YSTWApp]: <https://lively-tarsier-6322df.netlify.app/>

