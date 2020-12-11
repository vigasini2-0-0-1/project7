http=require('http');
url=require('url');
querystring = require('querystring');
var dt = require('./calculator')
function onRequest(request,response)
{
var path = url.parse(request.url).pathname;
var query =url.parse(request.url).query;

var num1 = querystring.parse(query)["n1"];
var num2=querystring.parse(query)["n2"];
var op=querystring.parse(query)["operation"];
response.write("OPERATION PERFORMED:");
response.write(num1+' '+op+' '+num2+' = '+dt.CAL(num1,num2,op)); response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has Started.......');