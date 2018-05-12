$(function(){
  $('#sec03').hide();
  $('#sec04').hide();
  $("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
  scroll(position);
  });
 /*scroll*/
  function scroll(position){
    $("body, html").animate({
  		scrollTop: position
  	 });
  }
  /* Select sec02*/
  $('.ul-holder ul li').click(function(){
     var value = $(this).find('.value').text();
     $('#sec04').hide();
     if( value == 'P100'){
       $(this).addClass("active").siblings().removeClass("active");
     }
    if(value == 'P300'){
       $(this).addClass("active").siblings().removeClass("active");
     }
     if(value == 'P500'){
       $(this).addClass("active").siblings().removeClass("active");
     }
     if(value == 'P1000'){
       $(this).addClass("active").siblings().removeClass("active");
     }
     myForm(value);
     $('#sec03').show();
     var position = $('#sec03').offset().top;
     scroll(position);
  });
  /* Form */
  function myForm(value){
    $("#myform").submit(function(e){
      e.preventDefault();
      var recipient=$("input[name=recipient]").val();
      var r_email=$("input[name=r_email]").val();
      var s_email=$("input[name=s_email]").val();
      var note = $("textarea[name=note]").val();
      var data = [];
          data['recipient'] = recipient;
          data['r_email'] = r_email;
          data['s_email'] = s_email;
          data['note'] = note;
          data['value'] = value;
      check(data);

    });

  }
  function check(data){
    $('.r-error').text('');
    $('.s-email-error').text('');
    $('.r-email-error').text('') ;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var error = '';
    if(!regex.test(data.r_email)){
      $('.r-email-error').text('Invalid email') ;

      var error=1;
    }
    if(!regex.test(data.s_email)){
      $('.s-email-error').text('Invalid email');
      var error=1;

    }
    if(data.recipient == ''){
      $('.r-error').text('Required recipient');
      var error=1;
    }
    if(error == 1){
      return false;
    }
    else{
      $('#sec04').show();
      confirm(data);
      var position = $('#sec04').offset().top;
      scroll(position);
    }
  }
  /* confirmation */
  function confirm(data){
    console.log(data);
    if(data.value == 'P100'){
      $(".img").attr("src","value-options/value-option-a-confirmation.png");
      $(".img-2").attr("src","value-options/value-option-a-confirmation.png");
    }
    if(data.value == 'P300'){
      $(".img").attr("src","value-options/value-option-b-confirmation.png");
      $(".img-2").attr("src","value-options/value-option-b-confirmation.png");
    }
    if(data.value == 'P500'){
      $(".img").attr("src","value-options/value-option-c-confirmation.png");
      $(".img-2").attr("src","value-options/value-option-c-confirmation.png");
    }
    if(data.value == 'P1000'){
      $(".img").attr("src","value-options/value-option-d-confirmation.png");
      $(".img-2").attr("src","value-options/value-option-d-confirmation.png");
    }
    $('.s4_s_email').text(data.s_email);
    $('.s4_r_email').text(data.r_email);
    $('.s4_message').text(data.note);
    bag(data);

  }

  /* modal */
  function bag(data){
    $('#close').click(function(){
      $("#modal").fadeOut('1500');
    });
    $('#bag').click(function(){
      $("#modal").fadeIn('1500');
      $('.m_s_email').text(data.s_email);
      $('.m_r_email').text(data.r_email);
      $('.m_message').text(data.note);
    });

  }


});
