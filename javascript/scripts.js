$("#font-selector").change(function() {
    // alert($(this).val());
    // $('.changeMe').css("font-family", $(this).val());
  $("body").removeClass();
  $("body").addClass($(this).val());
  // $("button").removeClass();
  // $("button").addClass($(this).val());
  });


  $(".color-change-1").click(
    function(){
      $("body").toggleClass("color-change-1");
      $(".sidepanel").toggleClass("color-change-1");
      $("a").toggleClass("color-change-1");

    }
  );

  $(".color-change-2").click(
    function(){
      $("body").toggleClass("color-change-2");
      $(".sidepanel").toggleClass("color-change-2");
      $(".font-selector").toggleClass("color-change-2");
      $(".color-change-1").toggleClass("color-change-2");
      $(".menu-items").toggleClass("color-change-2");
      $(".top-menu").toggleClass("color-change-2");

    }
  );


  