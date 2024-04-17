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
      $(".menu-button").toggleClass("color-change-1");
      $(".right-section").toggleClass("color-change-1");

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
      $("h1").toggleClass("color-change-2");
      $("a").toggleClass("color-change-2");
      $(".customize-icon-dark-mode").toggleClass("color-change-2");
      $(".customize-icon-light-mode").toggleClass("color-change-2");
      $(".homepage-list").toggleClass("color-change-2");
      $("label").toggleClass("color-change-2");
      $(".light-mode-button").toggleClass("color-change-2");
      $(".dark-mode-button").toggleClass("color-change-2");
      $(".next-page-button").toggleClass("color-change-2");
      $(".back").toggleClass("color-change-2");
      $(".title").toggleClass("color-change-2");
      $(".top-bar-homepage").toggleClass("color-change-2");
      $("p").toggleClass("color-change-2");
      $(".right-section").toggleClass("color-change-2");

    }
  );


  