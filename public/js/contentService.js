app.service('content',[function(){
  var config ={
    content: {
      title: 'This is the title',
      subtitle: 'This is the subtitle',
      totalMessage: 'Total Message'
    }
  };
  
  this.getConfiguration = function(){
    return config.content;
  };
}]);