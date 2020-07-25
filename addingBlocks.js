var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.shop.length;i++)
    {

    var innerDiv = document.createElement('div');
    innerDiv.className = `block`;
    innerDiv.id = `block${myObj.shop[i].name}`;
    document.body.appendChild(innerDiv);

    var tagName = document.createElement("h1");
    var textName = document.createTextNode(myObj.shop[i].name);
    tagName.appendChild(textName); 
    var elementName = document.getElementById(`block${myObj.shop[i].name}`);
    elementName.appendChild(tagName);


    // Create anchor element. 
    var a = document.createElement('a');  
                  
    // Create the text node for anchor element. 
    var link = document.createTextNode(`${myObj.shop[i].name} website`); 
      
    // Append the text node to anchor element. 
    a.appendChild(link);  
      
    // Set the title. 
    a.title = `${myObj.shop[i].name} website`;  
      
    // Set the href property. 
    a.href = myObj.shop[i].website;  
      
    // Append the anchor element to the body. 
    innerDiv.appendChild(a);  

    var tag = document.createElement("p");
    var text = document.createTextNode(`takeout:${myObj.shop[i].takeout} gift card:${myObj.shop[i].giftCard} dine in:${myObj.shop[i].dineIn}`);
    tag.appendChild(text); 
    var element = document.getElementById(`block${myObj.shop[i].name}`);
    element.appendChild(tag);

      }
    
  }
};