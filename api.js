function api_request(url,action,param_json,callback) {

    var method = "POST";
    var xmlHttpReq = false;
    var self = this;
    var msg="";


    var xmlHttpReq = undefined;

    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        // IE
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttpReq.open("POST", url, true);
    xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttpReq.onreadystatechange = function() {

        if (xmlHttpReq.readyState == 4)
        {

            if(xmlHttpReq.status != 200){
                console.log("POST request failed at : " + url);
                console.log('OOPS! Connection Error.');
                return;
            }

            callback(xmlHttpReq.responseText);
        }
        else
        {
            console.log("POST request failed at : " + url);
            console.log(self.xmlHttpReq.readyState);
        }
    }

    var postData = "action=" + action + "&param_json=" + param_json;

    xmlHttpReq.send(postData);
}

function getDemoLocation() {
    let url = 'https://api.queritel.com/api/general/demo_api/demo_api.php';

    let request_parameter = {};
    request_parameter = {
        "user_token": "mku-djgggdlndg3fso-75664-djjxg"
    };

    let action = "get_demo_locations";
    var param_json = JSON.stringify(request_parameter);


    api_request(url,action,param_json,function(response) {

        console.log(response);

        let strResponse = JSON.parse(response);

        if(strResponse["status"] === "OK"){
            
        }
        else{
        
        }
    });
}

function getDemoUser(){
    let url = 'https://api.queritel.com/api/general/demo_api/demo_api.php';
    let request_parameter = {};
    request_parameter = {
        "user_token": "mku-djgggdlndg3fso-75664-djjxg"
    };
    let action = "get_user_list";
    var param_json= JSON.stringify(request_parameter);

    var 

    api_request(url,action,param_json,function(response){
        console.log(response);

        let strResponse = JSON.parse(response);

        if(strResponse["status"] === "OK"){
            
        }
        else{
        
        }
    });
}