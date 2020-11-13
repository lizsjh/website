var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:700,
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
        delay:900,
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
        delay:700,
        loading: true,
        content:'Got it. Please allow me few seconds to pull up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
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
        delay:700,
        loading: true,
        content:'Can you describe condition of the rest of the items?'
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
        delay:700,
        loading: true,
        content:'Thank you for telling me. Meanwhile, I’ve identified the problem: there was a miscommunication in the packaging process.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'I can create a new order that will be delivered within a day, or I can refund for the missing item. What would you prefer?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message here.'
        }
        
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value); 
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text":response}, "*");
};
