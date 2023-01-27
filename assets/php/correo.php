	<?php
	/*Recogen los datos indicados en el formulario y se guardan en variables*/
	$nombre = $_REQUEST['nombre'];
	$telefono = $_REQUEST['telefono'];
	$email = $_REQUEST['email'];
	$comentario = $_REQUEST['comentario'];

	$destino = "fernando.madridlg@gmail.com"; 
	
	$contenido = "Nombre: " . $nombre . "\nTelefono: " . $telefono . "\nEmail: " . $email . "\nMensaje: " . $comentario;
	
	mail($destino, "Comentario", $contenido); 
	
	echo "<center><h1 class=mensaje> Tu mensaje se ha enviado <h1></center>";
	
	sleep(5);
	header("location:../../index.html");

	?>