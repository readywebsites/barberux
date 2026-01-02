jQuery(document).ready(function() {
    "use strict";
    //init date
    var mdate = new Date();
    document.getElementById('date').innerHTML = mdate.getFullYear();
    
});

// Set active nav item by matching link href to current page filename
jQuery(function($){
    "use strict";
    try {
        var path = window.location.pathname.split('/').pop();
        if (!path) path = 'index.html';
        // Normalize function to strip query/hash
        function norm(h){ return (h||'').split('?')[0].split('#')[0].split('/').pop(); }
        var matched = false;
        $('#mainmenu a').each(function(){
            var href = $(this).attr('href');
            var hf = norm(href);
            if (!hf) return; // skip anchors
            if (hf === path || (hf === 'index.html' && (path === '' || path === 'index.html')) ) {
                $('#mainmenu li').removeClass('current-menu-item active');
                $(this).closest('li').addClass('current-menu-item active');
                matched = true;
                return false; // stop each
            }
        });
        // If nothing matched and we're on index, ensure homepage is active
        if (!matched && (path === '' || path === 'index.html')) {
            $('#mainmenu li').removeClass('current-menu-item active');
            $('#mainmenu a[href*="index.html"]').closest('li').addClass('current-menu-item active');
        }
    } catch(e) {
        console && console.error && console.error('nav-active error', e);
    }
});