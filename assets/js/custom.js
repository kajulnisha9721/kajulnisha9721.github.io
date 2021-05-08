$(document).ready(function(){
				hidevalidation();
				$('#contactform')[0].reset(); //form should be reset everytime on page load
				document.getElementById("yearid").innerHTML = new Date().getFullYear();
				$('#contactPh').keypress(function (event) {
    				var keycode = event.which;
    				if (!(event.shiftKey == false && (keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
        				event.preventDefault();
    				}
				});
				$("#formsubmitcontact").click(function(){					
					hidevalidation();
					if(validation()==false)
					{	
							window.location.href = "/";					
							var link = "mailto:kajulnisha.umar9721@gmail.com"
									//+ "?cc=myCCaddress@example.com"
									+"?From="+ encodeURIComponent(document.getElementById('contactPh').value)
								+ "&subject=" + encodeURIComponent("Blog Mail from : "+ document.getElementById('contactname').value +"/"+document.getElementById('contactPh').value)
								+ "&body=" + encodeURIComponent(document.getElementById('contactmessage').value);							
							window.location.href = link;
							
					}else{
						alert("Please fill the required fields");
					}
					
				});
				$('#resetform,.close').click(function(){  					
					$('#contactform')[0].reset();
				});
				function validation(){
					var flag=0;
					if($("#contactname").val()==0){
						//$('#spancontactname').show();
						flag+=1;
					}
					if($("#contactPh").val()==0){
						//$('#spancontactcontactPh').show();
						flag+=1;
					}
					if($("#contactmessage").val()==0){
						//$('#spancontactmessage').show();
						flag+=1;
					}

					if(flag==0){						
						return false;
					}
					else{						
						return true;
					}

				}
				function hidevalidation(){
					$('#spancontactname').css('display','none');
					$('#spancontactPh').css('display','none');
					$('#spancontactmessage').css('display','none');
				}


			// Get the modal
			var modal = document.getElementById("myModal");

			// Get the image and insert it inside the modal - use its "alt" text as a caption
			var img = document.getElementById("myImg");
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			img.onclick = function(){
  				modal.style.display = "block";
  				modalImg.src = this.src;
  				captionText.innerHTML = this.alt;
			}

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			// span.onclick = function() { 				
  			// 			modal.style.display = "none";
			// }#myModal

			
			$("span.modalclose").click(function(event){
				event.stopPropagation();  	
				$('.modal').css('display','none'); 				
			});

});