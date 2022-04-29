const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const PORT = process.env.PORT || 1883

server.listen(PORT, function () {
    console.log('server started and listening on port ', PORT)
    aedes.publish({ topic: 'aedes/hello', payload: "I'm the Aedes MQTT Broker "})
})

aedes.on('clientReady',(client)=>{
    console.log(`Client ${client.id} has connected!`)
})

aedes.on('clientDisconnect',(client)=>{
    console.log(`Client ${client.id} has disconnected!`)
})

aedes.on('publish', (publish, client)=>{
    if(!client){
        return
    }
    console.log(`Published message ${publish.messageId} of topic ${publish.topic} from ${client.id}`)

})

aedes.on('subscribe', (subscriptions, client) => {
    subscriptions.forEach(subscription => {
        console.log(`Client ${client.id} has subscribed to ${subscription.topic}`)
    });
})

aedes.on('unsubscribe', (subscriptions, client) => {
    subscriptions.forEach(subscription => {
        console.log(`Client ${client.id} has unsubscribed from ${subscription.topic}`)
    });
})
