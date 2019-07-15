$('.loc').hover(
	function() {
		$(this).html('<b>Location:</b> Your House!!!');
	},
	function() {
		$(this).html('<b>Location:</b>WB-149, Fake Street, India ');
	}
);


$('.dog_img').css('display', 'none').fadeIn('slow');

$('.dogcard .btn').click(function(e){
	e.preventDefault();
	$('.dogcard').removeClass('dogcard_active');
	$('.btn').text('Adopt!');
	$(this).parent().addClass('dogcard_active');
	$(this).text('Adopted!!!');
});

$('.dog_img').click(function(e) {
	let img_c = $(this).attr('src');
	
	$('.overlay_item img').attr('src', img_c);
	$('.overlay').fadeIn('slow');
	$('.overlay_item_container').fadeIn('slow');
});

$('.overlay').css('display','none');
$('.overlay_item_container').css('display','none');

$('.close_btn').click(function() {
	$('.overlay_item_container').fadeOut('slow');
	$('.overlay').fadeOut('slow');
});


$('button[type="submit"]').click(function(e) {
	e.preventDefault();
	let $name = $('#name');
	let $pet = $('#pet');
	let $desc = $('#desc');

	// creating element to add to the dom
	let $post_item = $(
	`
		<div class="col-md-6">
			<div class="alert alert-primary" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<p><strong>Name:</strong> ${$name.val()}</p>
				<p><strong>Species:</strong> ${$pet.val()}</p>
				<p><strong>Notes:</strong> ${$desc.val()} </p>		
			</div>
		</div>	
	`
	);
	
	// append element to the dom
	$('.petItem').append($post_item);
	
	// remove the element from dom
	$('.close').click(function() {
		$(this).parent().parent().remove();
	});

	// reset the form field
	$name.val("");
	$pet.val("Cat");
	$desc.val("");

});

$('.logo').click(function() {
	$(this).addClass('logo_animation');
	$(this).on('transitionend', function() {
		$(this).removeClass('logo_animation');
	});
});

$('.logo').mouseover(function() {
	$(this).addClass('logo_bounce');
	$(this).on('animationend', function() {
		$(this).removeClass('logo_bounce');
	});
});

$('.theme').click(function() {
	$(this).toggleClass('theme_c');
	$('body').toggleClass('body_c');
	$('.col-md-5').toggleClass('form_dogcard_c');
	$('.form').toggleClass('form_dogcard_c');
	$('footer').toggleClass('footer_c');
});
