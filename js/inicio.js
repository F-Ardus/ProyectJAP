$( document ).ready(function() {


	$("#capaModal").hide();

	setTimeout(function(){
	$("#mainNav").toggleClass("hideNav");
	$("#wrapper").toggleClass("principal");
	setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
	}, 750);

	$('[data-toggle="tooltip"]').tooltip();

	//Agregar y quitar modal de imagenes de datos
	$("#mainDatos img").click(function(){
		$("#capaModal").show();
		$(this).addClass("imgModal"); 
	});
	$("#capaModal img, #capaModal").click(function(){
		$("#capaModal").hide();
		$("#mainDatos img").removeClass("imgModal");
	});


	//Mostrar y ocultar Datos extra
	$("#mainDatos a").click(function(){
		var midata = $(this).data('info');
		$(".infoPop[data-info=" + midata + "]").removeClass("hidenInfo");
	});
	$(".infoPop .closeArrow").click(function(){
		$(this).parent().addClass("hidenInfo");
	});

	$("#profileImg").click(function(){
		$("#mainNav").toggleClass("hideNav");
		$("#wrapper").toggleClass("principal");
		setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
	});

	$("#botonMenu").click(function(){
		$("#mainNav").toggleClass("hideNav");
		$("#wrapper").toggleClass("principal");
		$("#botonMenu").toggleClass("hideElement");
	});

});
