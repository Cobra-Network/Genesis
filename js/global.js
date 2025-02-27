import '/js/nav.js';
import '/js/adb.js';
import '/js/analytics.js';
import '/js/animate.js';
import '/js/theme.js';
import '/js/cloaking.js';

var link = document.createElement('link');
link.rel = 'icon';
link.href = '/favicon.ico';
link.type = 'image/x-icon';
document.head.appendChild(link);

(function() {
    var d = 'groleegni.net';
    var z = 9011510;
    var s = document.createElement('script');
    s.src = 'https://' + d + '/401/' + z;
    
    try {
        (document.body || document.documentElement).appendChild(s);
    } catch (e) {
        console.error('Script injection failed:', e);
    }
  })();