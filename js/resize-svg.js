 $(window).on("load resize", function() {
        
        if ($(window).width() < 400) {
          $("#Portada-svg")[0].setAttribute("viewBox", "225 0 1500 500");
          $("#text-svg")[0].setAttribute("x", "935");
        } else {
          $("#Portada-svg")[0].setAttribute("viewBox", "0 0 1920 500");
          $("#text-svg")[0].setAttribute("x", "1000");
        }
      });      