
/**
 * 
 * @param key
 * @param value
 * @param date 过期时间(时间戳)
 * @param path 作用目录
 * @param domain 作用域名
 */
function setCookie(key,value,date,path,domain){
	document.cookie = k + '=' + value + ';' + 'expire=' + date + ';path=' + path + ';domain=' + domain;
	//"user=kevin;expire='1573524251236';path='/';domain=.local.test"
}
setCookie('user','kevin',1573524251236,'/','/local.test');
