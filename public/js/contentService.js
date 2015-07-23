app.service('content',[function(){
  var config ={
    content: {
      title: 'This is the title',
      subtitle: 'This is the subtitle',
      totalMessage: 'Total Message'
    }
  };
  
  var messages = [
      {
        id: 0,
        sender: 'Name of Sender 1',
        subject: 'First Message',
        date: '2015-07-30',
        recipients: [
          'contact@email.ca',
          'support@email.ca',
          'ba@email.ca'
        ]
      },
      {
        id: 1,
        sender: 'Name of Sender 2',
        subject: 'Second message',
        date: '2015-07-31',
        recipients: [
          'contactsupport@email.ca',
          'technical@email.ca',
          'bi@email.ca'
        ]
      }
    ];
  
  
  this.getConfiguration = function(){
    return config.content;
  };
  
  this.getEmailMessages = function(){
    return messages;
  };
  
  this.getEmailMessageById = function(emailId){
    return messages[emailId];
  }; 
  
}]);