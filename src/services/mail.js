var sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('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');

exports.sendMail = async (data) => {
  sendgrid.
  sendgrid.send({
    to: data.email,
    from: 'nao-responda@atvbk.me',
    subject: 'Sua conta está pronta.',
    text: 'Temos uma informação importante para você ' + data.name,
    html: '<b>Não é spam</b>',
    templateId: 'd-6467eb1d328947fdb3fa85455c125da7',
    dynamic_template_data: {
        name: data.name,
        email: data.email, 
        tel: data.tel
    }

  }, true, function (err, data) {
      if (err) console.log(err + ' EROO');
      console.log(JSON.stringify(data));
  });
};