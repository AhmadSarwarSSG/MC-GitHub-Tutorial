//Getting User Borwer, Window and Device Info
var i = "";
screen.width && ((width = screen.width ? screen.width : ""), (height = screen.height ? screen.height : ""), (i += width + " x " + height));
var n,
    t,
    a,
    o = navigator.appVersion,
    r = navigator.userAgent,
    d = navigator.appName,
    s = "" + parseFloat(navigator.appVersion),
    c = parseInt(navigator.appVersion, 10);
-1 != (t = r.indexOf("Opera")) && ((d = "Opera"), (s = r.substring(t + 6)), -1 != (t = r.indexOf("Version")) && (s = r.substring(t + 8))),
    -1 != (t = r.indexOf("OPR"))
        ? ((d = "Opera"), (s = r.substring(t + 4)))
        : -1 != (t = r.indexOf("Edge"))
            ? ((d = "Microsoft Legacy Edge"), (s = r.substring(t + 5)))
            : -1 != (t = r.indexOf("Edg"))
                ? ((d = "Microsoft Edge"), (s = r.substring(t + 4)))
                : -1 != (t = r.indexOf("MSIE"))
                    ? ((d = "Microsoft Internet Explorer"), (s = r.substring(t + 5)))
                    : -1 != (t = r.indexOf("Chrome"))
                        ? ((d = "Chrome"), (s = r.substring(t + 7)))
                        : -1 != (t = r.indexOf("Safari"))
                            ? ((d = "Safari"), (s = r.substring(t + 7)), -1 != (t = r.indexOf("Version")) && (s = r.substring(t + 8)))
                            : -1 != (t = r.indexOf("Firefox"))
                                ? ((d = "Firefox"), (s = r.substring(t + 8)))
                                : -1 != r.indexOf("Trident/")
                                    ? ((d = "Microsoft Internet Explorer"), (s = r.substring(r.indexOf("rv:") + 3)))
                                    : (n = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) && ((d = r.substring(n, t)), (s = r.substring(t + 1)), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)),
    -1 != (a = s.indexOf(";")) && (s = s.substring(0, a)),
    -1 != (a = s.indexOf(" ")) && (s = s.substring(0, a)),
    -1 != (a = s.indexOf(")")) && (s = s.substring(0, a)),
    (c = parseInt("" + s, 10)),
    isNaN(c) && ((s = "" + parseFloat(navigator.appVersion)), (c = parseInt(navigator.appVersion, 10)));
var v = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),
    l = !!navigator.cookieEnabled;
void 0 !== navigator.cookieEnabled || l || ((document.cookie = "testcookie"), (l = -1 != document.cookie.indexOf("testcookie")));
var g = "-",
    w = [
        { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
        { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
        { s: "Windows Vista", r: /Windows NT 6.0/ },
        { s: "Windows Server 2003", r: /Windows NT 5.2/ },
        { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
        { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
        { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
        { s: "Windows 98", r: /(Windows 98|Win98)/ },
        { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
        { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: "Windows CE", r: /Windows CE/ },
        { s: "Windows 3.11", r: /Win16/ },
        { s: "Android", r: /Android/ },
        { s: "Open BSD", r: /OpenBSD/ },
        { s: "Sun OS", r: /SunOS/ },
        { s: "Chrome OS", r: /CrOS/ },
        { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
        { s: "iOS", r: /(iPhone|iPad|iPod)/ },
        { s: "Mac OS X", r: /Mac OS X/ },
        { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: "QNX", r: /QNX/ },
        { s: "UNIX", r: /UNIX/ },
        { s: "BeOS", r: /BeOS/ },
        { s: "OS/2", r: /OS\/2/ },
        { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ },
    ];
for (var u in w) {
    var W = w[u];
    if (W.r.test(r)) {
        g = W.s;
        break;
    }
}
var O = "-";
switch ((/Windows/.test(g) && ((O = /Windows (.*)/.exec(g)[1]), (g = "Windows")), g)) {
    case "Mac OS":
    case "Mac OS X":
    case "Android":
        O = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(r)[1];
        break;
    case "iOS":
        O = (O = /OS (\d+)_(\d+)_?(\d+)?/.exec(o))[1] + "." + O[2] + "." + (0 | O[3]);
}
var p = "no check";
if ("undefined" != typeof swfobject) {
    var x = swfobject.getFlashPlayerVersion();
    p = x.major > 0 ? x.major + "." + x.minor + " r" + x.release : "-";
}
let f = {
    screen: i,
    browser: d,
    browserVersion: s,
    browserMajorVersion: c,
    mobile: v,
    os: g,
    osVersion: O,
    cookies: l,
    flashVersion: p,
};
console.log("INFORMATION: ", f)


//Get cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// get cookie name
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// get current website Domain Name
function getWebsite() {
    return window.location.hostname;
}
//Get webstite page/path
function getUrl() {
    return window.location.pathname;
}
//Get website session to maintain the flow
function getWebSession(sname) {
    return sessionStorage.getItem(sname);
}
//Get page load time
function getPageLoadTime() {
    return (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;
}

function actionData(event) {
    dataa = { action: "", data: "" };
    tag = event.target.tagName; //Gives the tag name on which action take place
    val = event.target.value; //Gives the value of tag on which action take place
    console.log(typeof (val))
    if (typeof (val) === "undefined") {
        val = event.target.text;
        console.log(event.target.text);
    }
    else if (typeof (val) === "undefined") {
        val = event.target.Id;
    }
    console.log(tag);
    console.log(val);
    
    dataa.action = tag;
    dataa.data = val;
    return dataa;
}

function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};

var connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("https://webtrackerfyp.azurewebsites.net/chatHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .build();
const GEO_LOCATION_PROVIDER = "https://geolocation-db.com/jsonp";

connection.start().then((event) => {
    


    //--- prev code
    var userCookie = "webtracker_user";
    var webCookie = "webtracker_web" + getWebsite();
    var flowSession = "webtracker_flow" + getWebsite();
    var urlSession = "webtracker_url" + getUrl();
    let userId = getCookie(userCookie);
    let websiteId = getCookie(webCookie);
    let flowId = getWebSession(flowSession);
    let urlId = getWebSession(urlSession);

    console.log("UserId", userId);
    console.log("WebsiteId", websiteId);
    console.log("FlowId", flowId);
    console.log("UrlId", urlId);

    if (websiteId === "" || websiteId === null || websiteId === undefined) {
        console.log("New User Connected to " + getWebsite() + " with " + f.browser + " from " + JSON.stringify(location) + "On" + f.os);
        $.ajax({
            url: GEO_LOCATION_PROVIDER,
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                console.log("Location Details", location);
                connection.invoke("AddNewUser", getWebsite(), getUrl(), getDeviceType(), f.browser, f.os, JSON.stringify(location), f.os);
            }
        });
    }
    else if (flowId === "" || flowId === null || flowId === undefined) {
        console.log("Existing User Connected to Website " + getWebsite() + " with a new flow");
        connection.invoke("ExistingUser", websiteId, userId, getUrl())
    }
    else {
        console.log("User continued flow to the url " + getUrl());
        connection.invoke("ExistingFlow", flowId, getUrl());
    }
    /*connection.invoke("SendMessage", f.browser, f);*/
});


/////////////////////////////////Sesssion and Cookie Info Storing/////////////////////////////////
connection.on("AddNewUser", (userCookie, userIdValue, webCookie, webIdValue, flowSession, flowIdValue) => {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = webCookie + "=" + webIdValue + ";" + expires + ";path=/";
    document.cookie = userCookie + "=" + userIdValue + ";" + expires + ";path=/";
    sessionStorage.setItem(flowSession, flowIdValue);
    console.log("New User Added to the cookies and session storage");
});

connection.on("ExistingUser", (flowSession, flowIdValue) => {
    sessionStorage.setItem(flowSession, flowIdValue);
    console.log("Existing User added to the session storage");
});

// connection.on("ExistingFlow", (urlSession, urlIdValue) => {
//     sessionStorage.setItem(urlSession, urlIdValue);
//     console.log("Existing Flow added to the session storage");
// });

connection.on("ReceiveAction", function (actionsCount) {
    var sp;
    sp.append(`<span class="info-box-number">${actionsCount}</span>`);
    console.log('sp is ---: ' + sp);

    $('#actions-total-box').append(sp);
});

document.addEventListener('click', (event) => {
    var flowSession = "webtracker_flow" + getWebsit();

    console.log('--- flow session --- ' + flowSession);

    var flowId = getWebSession(flowSession);
    console.log('--- flow idd --- ' + flowId);

    var actionDataReceived = actionData(event);
    console.log('act data rec: '+actionDataReceived);
    var action = actionDataReceived.action;
    var data = actionDataReceived.data;

    var url = getUrl();
    if (data == undefined) {
        data = "has no value attribute";
    }
    if (action != "") {
        console.log("Action: " + action + " , " + "Data: " + data);
        connection.invoke("ReceiveAction", action, data, url, flowId);
    }
});
window.onerror = 
              function (msg, source, lineNo, columnNo, error) {
                connection.invoke("AddError", msg, source, lineNo, columnNo, error, getWebsite())
                console.log("Error: " + msg + 
                      "\nScript: " + source + 
                      "\nLine: " + lineNo + 
                      "\nColumn: " + columnNo + 
                      "\nStackTrace: " + error);
                return true;
            };
// Custom function to handle captured warnings
function handleWarning(message) {
  // Do something with the captured warning
  connection.invoke("AddWarning", message, getWebsite());
}

// Override console.warn() to capture warnings
(function() {
  var originalWarn = console.warn;
  console.warn = function() {
    var message = Array.from(arguments).join(' ');
    handleWarning(message);
    originalWarn.apply(console, arguments);
  };
})();

// Trigger a warning
console.warn("This is a warning message!");
