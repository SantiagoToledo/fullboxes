
      $(".service-item").click(function () {
        $(".service-item").removeClass("bg-warning");
        $(this).toggleClass("bg-warning");
        $(".collapse").collapse("hide");
      });

      $(location.hash.toString()).addClass("show");

      $("body").scrollspy({ target: "#main-nav" });

      // Increments the delay on each item.
      $(".rolldown-list li").each(function () {
        var delay = $(this).index() / 4 + "s";
        $(this).css({
          webkitAnimationDelay: delay,
          mozAnimationDelay: delay,
          animationDelay: delay,
        });
      });