var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:500,
        loading: true,
        content:'I am handling your request today. What can I do for you?'
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
        delay:500,
        loading: true,
        content:'Got it. Could you input your order number below?'
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
        delay:500,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1000,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, you need to pay $50 more for the new edition, and the shipping will be free.'
    });
}).then(function(){
    return botui.message.add({
        delay:500,
        loading: true,
        content:'Would you still like to exchange the book?'
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
        delay:500,
        loading: true,
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    return botui.message.add({
        delay:500,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

window.parent.postMessage(response, 'https://gatech.co1.qualtrics.com/jfe/preview/SV_aVjrEOH9mPRr7QF?Q_CHL=preview&Q_SurveyVersionID=current');