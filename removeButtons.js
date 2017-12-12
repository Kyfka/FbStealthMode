Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

buttons = {
  button1: "m_42ft _4jy0 _4jy4 _517h _51sy",
  button2: "_2yfv _2yfv FriendButton",
  button3: "_42ft _4jy0 _4jy4 _517h _51sy",
  button4: "_42ft _4jy0 FriendRequestAdd addButton _4jy4 _4jy2 selected _51sy",
  button5: "addFriendText",
  button6: "_524d",
  button7: "_3t53 _4ar- _ipn",
  button8: "fsm fwn fcg UFICommentActions",
  button9: "_53d _53q"
}

function removeButtons(buttonNames){
  for(i = 0;i < buttonNames.length; i++){
    document.getElementsByClassName(buttonNames[i]).remove();
  }
}

removeButtons(buttons);

//document.getElementsByClassName("m_42ft _4jy0 _4jy4 _517h _51sy").remove();
//document.getElementsByClassName("_2yfv _2yfv FriendButton").remove();
//document.getElementsByClassName("_42ft _4jy0 _4jy4 _517h _51sy").remove();
//document.getElementsByClassName("_42ft _4jy0 FriendRequestAdd addButton _4jy4 _4jy2 selected _51sy").remove();
//document.getElementsByClassName("addFriendText").remove();
//document.getElementsByClassName("_524d").remove();
//document.getElementsByClassName("_3t53 _4ar- _ipn").remove();
//document.getElementsByClassName("fsm fwn fcg UFICommentActions").remove();
//document.getElementsByClassName("_53d _53q").remove();
