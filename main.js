jQuery(document).ready(function() {
   jQuery(".js_terms").click(function() {
       jQuery(".container").prepend(".text-box");
       jQuery(".text-box").append(".terms-text")
   });
   jQuery(".js_terms").click(function() {
       jQuery(".container").prepend(".text-box");
       jQuery(".text-box").append(".help-text")
   });
});