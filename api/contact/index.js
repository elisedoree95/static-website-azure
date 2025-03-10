module.exports = async function (context, req) {
    const { name, email, message } = req.body;
  
    // You can store this in a DB or send via email in real apps
    context.log(`New message from ${name} <${email}>: ${message}`);
  
    context.res = {
      status: 200,
      body: "Message received! We'll get back to you shortly."
    };
  };
  