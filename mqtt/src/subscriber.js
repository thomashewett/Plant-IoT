// subscriber.js 
const mqtt = require('mqtt') 
require('dotenv').config()
//const client = mqtt.connect(process.env.BROKER_URL) 
//const topicName = 'test/tommyhh/connection' 
console.log(process.env);
const client = mqtt.connect(process.env.LOCALHOST) 
const topicName = 'aedes/test' 


// connect to same client and subscribe to same topic name  
client.on('connect', () => { 
    // can also accept objects in the form {'topic': qos} 
  client.subscribe(topicName, (err, granted) => { 
      if(err) { 
          console.log(err, 'err'); 
      } 
      console.log(granted, 'granted') 
  }) 
}) 

// on receive message event, log the message to the console 
client.on('message', (topic, message, packet) => { 
    console.log(packet, packet.payload.toString()); 
    if(topic === topicName) { 
     console.log(JSON.parse(message)); 
    } 
}) 

client.on("packetsend", (packet) => { 
    console.log(packet, 'packet2'); 
}) 