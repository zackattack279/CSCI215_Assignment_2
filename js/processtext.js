function processText()
{
	var count = 0;
	var str = document.getElementByName("name").value; //gets string from processtext.html
	
	var temp = str.toLowerCase(); //turns the function case-insensitive
	
	temp = str.replace(".", " "); //gets rid of periods
	
	var strArray = temp.split(" "); //makes new array of the split words
	
	var counted = {};
	
	for(var i=0; i<strArray.length; i++)
	{
		var word = strArray[i]
		
		if(!counted[word]){
			counted[word]=1;
		}
		else
			counted[word]++
	}
}