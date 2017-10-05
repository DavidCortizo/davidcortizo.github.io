$(window).ready(function(){
  
    (function () {
        var sideMenu = {
            init: function() {
                this.cacheDom();
                this.applyClasses();
            },
            cacheDom: function() {
                this.$sideMenu = $("#side-menu");
                this.$body= $("body");
            },
            bindEvents: function(){
                this.$sideMenu.on('click', this.openSideMenu());
            },
            applyClasses: function(){
                this.$sideMenu.addClass("navbar-closed");
            },
            openSideMenu: function(){
                console.log("hola");
                $(this).removeClass("navbar-closed");
            }
        };
        return {
            sideMenu: sideMenu.init()
        };
    })();
      
});
