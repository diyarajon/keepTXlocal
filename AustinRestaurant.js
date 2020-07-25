var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.restaurant.length;i++)
    {

    var innerDiv = document.createElement('div');
    innerDiv.className = `block`;
    innerDiv.click(myObj.restaurant[i].website);
    innerDiv.id = `block${myObj.restaurant[i].name}`;
    document.body.appendChild(innerDiv);
    var tagName = document.createElement("h1");
    var textName = document.createTextNode(myObj.restaurant[i].name);
    tagName.appendChild(textName); 
    var elementName = document.getElementById(`block${myObj.restaurant[i].name}`);
    elementName.appendChild(tagName);

    // Create anchor element. 
    var a = document.createElement('a');  
                  
    // Create the text node for anchor element. 
    var link = document.createTextNode("This is link"); 
      
    // Append the text node to anchor element. 
    a.appendChild(link);  
      
    // Set the title. 
    a.title = "This is Link";  
      
    // Set the href property. 
    a.href = myObj.restaurant[i].website;  
      
    // Append the anchor element to the body. 
    innerDiv.append(a);  

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

