
$(document).ready(function()
{
   var rated = false;
   
   $('.rating').hover(
                     
            // To handle the mouse over
            function() {
			  if(!rated)
			  {
                $(this).prevAll().andSelf().addClass('ratings_over');
                $(this).nextAll().removeClass('ratings_vote'); 
			  }
            },
			
            // To handle the mouse out
            function() {
			 if(!rated)
                $(this).prevAll().andSelf().removeClass('ratings_over');        
            }
        );
		
				
		//Click event handler for each star
		$('.rating').bind('click', function() {
            var star = this;
            var widget = $(this).parent();
			rated = true;
            
            var clicked_data = {
                clicked_on : $(star).attr('class'),
                widget_id : widget.attr('id')
            };
			
			
            $(this).prevAll().andSelf().addClass('ratings_over');
            $(this).nextAll().removeClass('ratings_vote'); 
				
            $.ajax({
				'url' : 'http://serviceurl/api',
				'type' : 'POST',
				'data' : {
					'numberOfWords' : clicked_data
				},
				'success' : function(data) {              					
					alert('Thanks, Your rating has been recorded.');
				},
				'error' : function(request,error)
				{				    
					alert('Thanks, Your rating has been recorded.');
				}
			});
        });
		
		
});
