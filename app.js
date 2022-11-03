var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1000,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:800,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'I can help you with that. First, could you tell me your order number?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Which item is missing?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Thank you for telling me. Meanwhile, I’ve identified the problem: there was a miscommunication in the packaging process.'
    });
}).then(function(){
    return botui.message.add({
        delay:2500,
        loading: true,
        content:'I can create a new order that will be delivered within a day. Is there anything else I can help you with?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'Alright. I’ll process your request. Please give me a moment'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'I have processed your request, and the issue is resolved'
    });
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
    sendcomplete();
});


function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2],"text4":response[3]}, "*");
};
