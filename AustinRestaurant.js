var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {
    var innerDiv = document.createElement('div');
    innerDiv.className = `block`;
    innerDiv.id = `block${myObj.restaurant[i].name}`;
    document.body.appendChild(innerDiv);
    var tagName = document.createElement("h1");
    var textName = document.createTextNode(myObj.restaurant[i].name);
    tagName.appendChild(textName); 
    var elementName = document.getElementById(`block${myObj.restaurant[i].name}`);
    elementName.appendChild(tagName);

    var tag = document.createElement("p");
    var text = document.createTextNode(`takeout:${myObj.restaurant[i].takeout} gift card:${myObj.restaurant[i].giftCard} dine in:${myObj.restaurant[i].dineIn}`);
    tag.appendChild(text); 
    var element = document.getElementById(`block${myObj.restaurant[i].name}`);
    element.appendChild(tag);

      }
    
  }
};

xmlhttp.open("GET", "AustinRestaurant.json", true);
xmlhttp.send();

