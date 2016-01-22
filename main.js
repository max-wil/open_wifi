jQuery(document).ready(function() {
   jQuery(".js_terms").click(function() {
       jQuery(".container").append(jQuery(".text-box"));
       jQuery(".text-box").append(jQuery(".terms-text"))
   });
   jQuery(".js_help").click(function() {
       jQuery(".container").append(jQuery(".text-box"));
       jQuery(".text-box").append(jQuery(".help-text"))
   });
});