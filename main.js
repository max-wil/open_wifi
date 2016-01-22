jQuery(document).ready(function() {
    var textBox = jQuery.add(div).addClass(".text-box");
    var termsText = jQuery(".terms-text");
    var helpText = jQuery(".help-text");
    
   jQuery(".js_terms").click(function() {
       jQuery(".container").append(textBox);
       jQuery(".text-box").append(termsText);
   });
   jQuery(".js_help").click(function() {
       jQuery(".container").append(textBox);
       jQuery(".text-box").append(helpText);
   });
});