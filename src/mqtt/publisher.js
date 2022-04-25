//publisher.js
const mqtt = require('mqtt')
require('dotenv').config()

//the client id is used by the MQTT broker to keep track of clients and and their // state
const clientId = 'mqttjs_' + Math.random().toString(8).substring(2,4)
// console.log(process.env.BROKER_URL)
// const client = mqtt.connect(process.env.BROKER_URL, {clientId:clientId, clean:false, reconnectPeriod:1})
console.log(process.env.LOCALHOST)
const client = mqtt.connect(process.env.LOCALHOST, {clientId:clientId, clean:false, reconnectPeriod:1})

// console.log(process.env.BROKER_URL, 'client', clientId)

const topicName = 'aedes/test'

client.on("connect",function(connack){   
    console.log("client connected", connack); 
 // on client connection publish messages to the topic on the server/broker  
   const payload = {1: "Hello world", 2: "Welcome to the test connection"} 
   client.publish(topicName, JSON.stringify(payload), {qos: 1, retain: true}, (PacketCallback, err) => { 
 
       if(err) { 
           console.log(err, 'MQTT publish packet') 
       } 
   }) 
 
   //assuming messages comes in every 3 seconds to our server and we need to publish or process these messages 
   setInterval(() => console.log("Message published"), 3000); 
 }) 
 
 client.on("error", function(err) { 
     console.log("Error: " + err) 
     if(err.code == "ENOTFOUND") { 
         console.log("Network error, make sure you have an active internet connection") 
     } 
 }) 
 
 client.on("close", function() { 
     console.log("Connection closed by client") 
 }) 
 
 client.on("reconnect", function() { 
     console.log("Client trying a reconnection") 
 }) 
 
 client.on("offline", function() { 
     console.log("Client is currently offline") 
 })  
 