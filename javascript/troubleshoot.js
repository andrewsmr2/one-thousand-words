$("#font-selector").change(function() {
    // alert($(this).val());
    // $('.changeMe').css("font-family", $(this).val());
  $("body").removeClass();
  $("body").addClass($(this).val());
  });

  $(".color-change-1").click(
    function(){
      $("body").toggleClass("color-change-1");
    }
  );

  $(".color-change-2").click(
    function(){
      $("body").toggleClass("color-change-2");
    }
  );