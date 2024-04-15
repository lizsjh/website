var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
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
        delay:6000,
        loading: true,
        content:'I do not understand what you said. Can you repeat below? You can write down multiple requests if you have more than one.'
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
        delay:6000,
        loading: true,
        content:'I can help you with that. Please provide your order number below.'
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
        content:'Alright. Which item would you like to add to your order?'
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
        delay:4000,
        loading: true,
        content:'Got it. I will process your request(s). Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        content:'I have processed your request(s) and the issue(s) is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
    
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3]}, "*");
};
