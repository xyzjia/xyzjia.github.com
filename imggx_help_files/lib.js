function em(e) { return document.getElementById(e); }
function get_skin() {//	 hd('mu')
cook=GetCookie('skin')
if(cook) em('sklink').href="/css/sk_"+cook+".css"
else em('sklink').href="/css/sk_1.css"
}
function hd(e) { em(e).style.display='none' }
function ssk(a) {
	em('sklink').href="/css/sk_"+a+".css"
	exp=new Date();
	exp.setTime(exp.getTime()+5184000000);
	SetCookie('skin',a,exp,'/','.kuku123.com')
}
function GetCookieVal(offset)
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value)
{
var expdate = new Date();
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ))
document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
+((secure == true) ? "; secure" : "");
}
function GetCookie(name)
{var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)
{var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return GetCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}return null;}
document.writeln("<base target=\"_blank\">");
document.writeln("<script language=\"javascript\">get_skin()<\/script>")