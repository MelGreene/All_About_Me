/*I referenced stackoverflow here
for mouseover and mouseout, used to make 
	eyes blink*/
 $("#img").on({
 	"mouseover" : function(){
 		this.src ='EyesZoomed.png';
 	},
	"mouseout" : function (){
		this.src='eyesclosed.jpg';
	}

 });

//w3schools inspired
document.getElementById("discovery").style.color="purple";




