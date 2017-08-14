function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function connectTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Fconnect.pug":"div(style=\"padding: 16px\")\n\tdiv.mdc-card\n\t\tsection.mdc-card__media.connectImage\n\t\tsection.mdc-card__primary\n\t\t\th1.mdc-card__title.mdc-card__title--large\n\t\t\t\t| Connection Error\n\t\t\th2.mdc-card__subtitle\n\t\t\t\t| Could not find a Databox\n\t\tsection.mdc-card__supporting-text\n\t\t\tdiv\n\t\t\t\t| Enter the address of a databox to continue\n\t\t\tlabel.mdc-textfield(style=\"width: 100%\")\n\t\t\t\tinput#connectField.mdc-textfield__input(style=\"width: 100%\", required=true, onkeypress='submit(event)')\n\t\t\t\tspan.mdc-textfield__label\n\t\t\t\t\t| Databox Address\n\n\t\tsection.mdc-card__actions\n\t\t\tbutton.mdc-card__action.mdc-button.mdc-button--primary(onclick='connect()')\n\t\t\t\t| Connect\n\t\t\tif(qr_scan)\n\t\t\t\tbutton.mdc-card__action.mdc-button.mdc-button--primary(onclick='scanQR()')\n\t\t\t\t\t| Scan QR Code"};
;var locals_for_with = (locals || {});(function (qr_scan) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media connectImage\"\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch1 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Connection Error\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch2 class=\"mdc-card__subtitle\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Could not find a Databox\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Enter the address of a databox to continue\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Clabel class=\"mdc-textfield\" style=\"width: 100%;\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cinput class=\"mdc-textfield__input\" id=\"connectField\" style=\"width: 100%;\" required=\"required\" onkeypress=\"submit(event)\"\u002F\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-textfield__label\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Databox Address\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" onclick=\"connect()\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Connect\u003C\u002Fbutton\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
if ((qr_scan)) {
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" onclick=\"scanQR()\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Scan QR Code\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"qr_scan" in locals_for_with?locals_for_with.qr_scan:typeof qr_scan!=="undefined"?qr_scan:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}