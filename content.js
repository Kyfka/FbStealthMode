var active = false;

const fbItems = {
    sendMessageButton: "._51xa",
    addFriendButton: ".FriendButton",
    button5: "._42ft",
    button6: "._524d",
    button7: "._3t53",
    button8: "._57w",
    button9: "._53d",
    likeButtonPost: "._khz",
    commentSection: ".commentable_item"
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "clicked_browser_action" ) {
          if (active == false){
            active = true;
            facebookMode("stealth");
          } else {
            active = false;
            facebookMode("normal");
          }
      }
      else if (request.message === "update" && active == true) {
            console.log(active);
            facebookMode("stealth");
        }
    }
);

function facebookMode(type){

    backgroundColors = {
        normal: "#E9EBEE",
        stealth: "#3F4040"
    }

    document.body.style.backgroundColor = backgroundColors[type];

    Object.keys(fbItems).forEach(function(key){

            fbPageItem = document.querySelector(fbPageItems[key]);

            if(fbPageItem) {
                if (type == "stealth"){
                    fbPageItem.style.display = "none"
                } else if (type =="normal") {
                    fbPageItems.style.display = "inline"
                }
            };
    });
}
