
var template_cache={}
function template(templateUrl,container,data) {

	//loadfrom cache
	if(template_cache[templateUrl] != undefined){
		var result = embedData(template_cache[templateUrl],data)
		container.innerHTML = result
		return;
	}

	var xmlhttp; 
	if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest(); 
	else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
        	template_cache[templateUrl] = xmlhttp.responseText

        	var result = embedData(xmlhttp.responseText,data)
			container.innerHTML = result
     	}
	}
	xmlhttp.open('GET',templateUrl,true);

    xmlhttp.send();
}

function embedData(templateContent,data){
	Object.keys(data).forEach(k=>{
		var v = data[k];
		templateContent = templateContent.replace('{{'+k+'}}',v)
	})
	return templateContent
}
