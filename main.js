jQuery(document).ready(function() {
    var textBox = jQuery(".text-box");
    var termsText = "Some terms text";
    var helpText = "Some help text";
    
   jQuery(".js_terms").click(function() {
       jQuery(".container").append("<div class='text-box'>");
       jQuery(".text-box").append("<div class='terms-text'>");
       jQuery("terms-text").text(termsText);
   });
   jQuery(".js_help").click(function() {
       jQuery(".container").append("<div class='text-box'>");
       jQuery(".text-box").append("<div class='help-text'>");
       jQuery("help-text").text(helpText);
   });
});