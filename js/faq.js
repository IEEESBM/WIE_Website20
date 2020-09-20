$("#accordion ul li").each(function(){
    var trigger= $(this).find('a')
    var acc_text = $(this).find('.accordion')
    $(trigger).click(function(){
      
        $(acc_text).slideToggle()
  
    });
});
