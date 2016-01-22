jQuery(document).ready(function() {
   jQuery(".js_terms").click(function() {
       jQuery(".container").append(".text-box");
       jQuery(".text-box").append(".terms-text")
   });
   jQuery(".js_help").click(function() {
       jQuery(".container").append(".text-box");
       jQuery(".text-box").append(".help-text")
   });
});