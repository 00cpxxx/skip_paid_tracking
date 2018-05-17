//rewrite the arwt function so it does nothing preventing it from changing the host to the blocked googleadservices.com host.
x=document.createElement('script');
x.text="function __disable_arwt(){if(typeof google == 'object' && typeof google.arwt == 'function') google.arwt=function(){}; else setTimeout(__disable_arwt,500);} __disable_arwt();";
document.body.appendChild(x);
