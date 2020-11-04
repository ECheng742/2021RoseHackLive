var background = document.getElementsByTagName("body")[0];
// temporary, until hero animation is done 
var title = document.getElementById("title");
var animation = document.getElementById("animation"); 
var socialMedia = document.getElementById("socialMedia");
var quickIcon = document.getElementById("quickIcon");

// switches btn day/night theme based on time
var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 19) {
        // day theme
        $(".objectsDay").show();
        $(".objectsNight").hide();
       
        background.classList.remove("animationNightBackground");
        background.classList.add("animationDayBackground");

        // quickIcon.classList.remove("titleMatchNightBackground");
        // quickIcon.classList.add("titleMatchDayBackground");
    }
    else {
        // night theme
        $(".objectsDay").hide();
        $(".objectsNight").show();

        background.classList.remove("animationDayBackground");
        background.classList.add("animationNightBackground");
        
        // quickIcon.classList.remove("quMatchDayBackground");
        // quickIcon.classList.add("titleMatchNightBackground");

        // setTimeout(function() {
        var intervalID = window.setInterval(function() {
            $("#imgBack").fadeToggle(3000);
            $("#imgBack2").fadeToggle(2000);
            $("#imgBack3").fadeToggle(4000);
            $("#imgBack4").fadeToggle(1500);
            $("#imgBack5").fadeToggle(2500);
            $("#imgBack6").fadeToggle(2200);
            $("#imgBack7").fadeToggle(1200);
            $("#imgBack7-5").fadeToggle(1000);
            $("#imgBack8").fadeToggle(1700);
            $("#imgBack9").fadeToggle(0700);
            $("#imgBack9-5").fadeToggle(900);
            $("#imgBack10").fadeToggle(3100);
            $("#imgBack10-5").fadeToggle(2600);
            $("#imgBack11").fadeToggle(2900);
            $("#imgBack11-5").fadeToggle(0800);
            $("#imgBack12").fadeToggle(1800);
        }, 1000);

        var intervalID2;
        setTimeout(function() {
            intervalID2 = window.setInterval(function() {
                $("#imgBack").fadeToggle(5000);
                $("#imgBack2").fadeToggle(4000);
                $("#imgBack3").fadeToggle(6000);
                $("#imgBack4").fadeToggle(3500);
                $("#imgBackA").fadeToggle(6000);
                $("#imgBackB").fadeToggle(3500);
                $("#imgBack5").fadeToggle(4500);
                $("#imgBack6").fadeToggle(4200);
                $("#imgBack7").fadeToggle(3200);
                $("#imgBack7-5").fadeToggle(3000);
                $("#imgBack8").fadeToggle(3700);
                $("#imgBack9").fadeToggle(2700);
                $("#imgBack9-5").fadeToggle(2900);
                $("#imgBack10").fadeToggle(5100);
                $("#imgBack10-5").fadeToggle(4600);
                $("#imgBack11").fadeToggle(4900);
                $("#imgBack11-5").fadeToggle(2800);
                $("#imgBack12").fadeToggle(3800);
            }, 1000);

        }, 3000);

        var intervalID3;
        setTimeout(function() {

            intervalID3 = window.setInterval(function() {
                $("#imgBack").fadeToggle(7000);
                $("#imgBack2").fadeToggle(6000);
                $("#imgBack3").fadeToggle(8000);
                $("#imgBack4").fadeToggle(5500);
                $("#imgBackA").fadeToggle(8000);
                $("#imgBackB").fadeToggle(5500);
                $("#imgBack5").fadeToggle(5500);
                $("#imgBack6").fadeToggle(6200);
                $("#imgBack7").fadeToggle(5200);
                $("#imgBack7-5").fadeToggle(5000);
                $("#imgBack8").fadeToggle(5700);
                $("#imgBack9").fadeToggle(4700);
                $("#imgBack9-5").fadeToggle(4900);
                $("#imgBack10").fadeToggle(7100);
                $("#imgBack10-5").fadeToggle(6600);
                $("#imgBack11").fadeToggle(6900);
                $("#imgBack11-5").fadeToggle(4800);
                $("#imgBack12").fadeToggle(5800);
            }, 1000);

        }, 6000);
        
        setTimeout(function() {
            clearInterval(intervalID);
            clearInterval(intervalID2);
            clearInterval(intervalID3);

            $("#imgBack").fadeIn(7000);
            $("#imgBack2").fadeIn(6000);
            $("#imgBack3").fadeIn(8000);
            $("#imgBack4").fadeIn(5500);
            $("#imgBackA").fadeIn(8000);
            $("#imgBackB").fadeIn(5500);
            $("#imgBack5").fadeIn(5500);
            $("#imgBack6").fadeIn(6200);
            $("#imgBack7").fadeIn(5200);
            $("#imgBack7-5").fadeIn(5000);
            $("#imgBack8").fadeIn(5700);
            $("#imgBack9").fadeOut(4700);
            $("#imgBack9-5").fadeIn(4900);
            $("#imgBack10").fadeOut(7100);
            $("#imgBack10-5").fadeIn(6600);
            $("#imgBack11").fadeOut(6900);
            $("#imgBack11-5").fadeOut(4800);
            $("#imgBack12").fadeIn(5800);
        }, 9000);
    }
}



// allows email to be copyied to clipboard
$(document).ready(function() {
    // $('a[href^=mailto]').addClass('mailto-link');

    var mailto = $('.mailto-link');
    var messageCopy = 'Copy email';
    var messageSuccess = 'Copied';
    
    $('.mailto-message').append(messageCopy);
    
    // Disable default action (opening your email client. yuk.)
    $('a[href^=mailto]').click(function() {
        return false; 
    })
    
    // On click, get href and remove 'mailto:'
    // Store email address in a variable.
    mailto.click(function() {
        var href = $(this).attr('href');
        var email = href.replace('mailto:', '');
        copyToClipboard(email);
        $('.mailto-message').empty().append(messageSuccess);
        setTimeout(function() {
            $('.mailto-message').empty().append(messageCopy);
        }, 2000); 
    });
});

// Copies email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

//alert to chrome if opened in ie
let userAgentString = navigator.userAgent; 
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1; 
if (IExplorerAgent == true) {
    alert("Warning: Browser not supported. To view this webpage, we recommend that you use the latest version of Chrome, Firefox, or Safari.");
}