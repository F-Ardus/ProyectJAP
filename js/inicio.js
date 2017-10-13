$( document ).ready(function() {

	$("#capaModal").hide();
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

});
