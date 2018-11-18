  $(document).ready(function(){
         // for default-fixed menu
        var $menu = $("#menu");
            
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default")){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });   


        // for search
        focusMethod = function getFocus() {           
          document.getElementById("myTextField").focus();
        } 


// for loginRegistr form

        const buttons = Array.from(document.querySelectorAll('.buttons > button'));
        const activeElements = Array.from(document.querySelectorAll('[data-action="animated"]'));

        function toggle() {
          activeElements.forEach(item => {
            item.classList.toggle('signup-button-active');
            item.classList.toggle('login-button-active');
          });
        };

        buttons.forEach(item => item.addEventListener('click', toggle));


// for first scrin
// $('.header').height($(window).height());

// for link-menu

        $(".navbar .move").click(function(){
          $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
            },1000)
  
        })
        $(function(){
            $("#signup-form").submit(function(e){
                e.preventDefault();
                $("#thanks").removeClass("modal");
                $("#thanks").addClass("show");
                $("#modal").removeClass("show");
                $("#modal").addClass("modal");

            });
        });

  });
