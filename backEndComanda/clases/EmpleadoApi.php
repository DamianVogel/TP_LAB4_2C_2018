<?php
require_once 'Empleado.php';
require_once 'IApiUsable.php';
require_once 'AutentificadorJWT.php';


class EmpleadoApi extends Empleado implements IApiUsable
{


 	public function TraerUno($request, $response, $args) {
     	$id=$args['id'];
        $empleado=Empleado::TraerUnEmpleado($id);
        if(!$empleado)
        {
            $objDelaRespuesta= new stdclass();
            $objDelaRespuesta->error="No existe El usuario";
            $NuevaRespuesta = $response->withJson($objDelaRespuesta, 500); 
        }else
        {
            $NuevaRespuesta = $response->withJson($empleado, 200); 
        }     
        return $NuevaRespuesta;
    }

     public function TraerTodos($request, $response, $args) {
      	$todosLosEmpleados=Empleado::TraerTodoLosEmpleados();
     	$newresponse = $response->withJson($todosLosEmpleados,200);  
        
    	return $newresponse;
       
    }
      public function CargarUno($request, $response, $args) {
     	
        $objDelaRespuesta= new stdclass();
        
        $ArrayDeParametros = $request->getParsedBody();
        //var_dump($ArrayDeParametros);
         $usuario= $ArrayDeParametros['usuario'];
          $sector= $ArrayDeParametros['sector'];
        $clave= $ArrayDeParametros['clave'];
        $perfil= $ArrayDeParametros['perfil'];
        $estado= "Activo";

        $miEmpleado= new Empleado();
        $miEmpleado->usuario=$usuario;
        $miEmpleado->clave=$clave;
        $miEmpleado->sector=$sector;
        $miEmpleado->perfil=$perfil;
        $miEmpleado->estado=$estado;

        $ultimoId=$miEmpleado->InsertarEmpleado();    
        //$response->getBody()->write("se guardo el empleado");
        $objDelaRespuesta->respuesta="Se guardo el Empleado.";
        $objDelaRespuesta->ultimoIdGrabado=$ultimoId;   
        return $response->withJson($objDelaRespuesta, 200);
    }




      public function BorrarUno($request, $response, $args) {
     	$ArrayDeParametros = $request->getParsedBody();
         
     	$id=$ArrayDeParametros['id'];
     	$empleado= new Empleado();
     	$empleado->id=$id;
         
     	$cantidadDeBorrados=$empleado->BorrarEmpleado();

     	$objDelaRespuesta= new stdclass();
	    $objDelaRespuesta->cantidad=$cantidadDeBorrados;
	    if($cantidadDeBorrados>0)
	    	{
	    		 $objDelaRespuesta->resultado="algo borro!!!";
	    	}
	    	else
	    	{
	    		$objDelaRespuesta->resultado="no Borro nada!!!";
	    	}
	    $newResponse = $response->withJson($ArrayDeParametros, 200);  
      	return $newResponse;
    }



     
     public function ModificarUno($request, $response, $args) 
     {
     	
     	$ArrayDeParametros = $request->getParsedBody(); 
        $objDelaRespuesta= new stdclass();

        $usuario= $ArrayDeParametros['usuario'];
        $sector= $ArrayDeParametros['sector'];
      $clave= $ArrayDeParametros['clave'];
      $perfil= $ArrayDeParametros['perfil'];
      $id= $ArrayDeParametros['id'];

      $miEmpleado= new Empleado();
      $miEmpleado->usuario=$usuario;
      $miEmpleado->clave=$clave;
      $miEmpleado->sector=$sector;
      $miEmpleado->perfil=$perfil;
      $miEmpleado->id=$id;

	   	$resultado =$miEmpleado->ModificarEmpleado();
	   	$objDelaRespuesta= new stdclass();
		//var_dump($resultado);
		$objDelaRespuesta->resultado=$resultado;
        $objDelaRespuesta->tarea="modificar";
		return $response->withJson($objDelaRespuesta, 200);		
    }

 public function Login($request, $response, $args) 
 {
     	
     	$ArrayDeParametros = $request->getParsedBody();
	 
	    $usuario=$ArrayDeParametros['usuario'];
	    $clave=$ArrayDeParametros['clave'];
        $empleado=Empleado::ValidarEmpleado($usuario,$clave);
        $datos = array('usuario' => $empleado->usuario,'perfil' => $empleado->perfil, 'id'=>$empleado->id, 'sector'=>$empleado->sector , 'estado'=>$empleado->estado);


       $token= AutentificadorJWT::CrearToken($datos);
        $respuesta= array('token'=>$token,'datos'=> $datos);
        


		return $response->withJson($respuesta, 200);		
}


         public static function Suspender($request, $response, $args) 
         {
     	
     	 $ArrayDeParametros = $request->getParsedBody(); 
         $id=$ArrayDeParametros['id'];
         $estado=$ArrayDeParametros['estado'];   	
 
         $resultado= Empleado::SuspenderEmpleado($id,$estado);
        
	   	 $objDelaRespuesta= new stdclass();
		 //var_dump($resultado);
		 $objDelaRespuesta->resultado=$resultado;
         $objDelaRespuesta->tarea="Suspender";
		 return $response->withJson($objDelaRespuesta, 200);		
         }

    public static function CantidadDeOperaciones($request, $response, $args)
    {
        $id=$args['id'];
        $operaciones=Empleado::CantidadDeOperacionesEmp($id);
        return $response->withJson($operaciones, 200);
    }

    public static function IngresosAlSistema($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::FechasDeLogueo();

        return $response->withJson($objDelaRespuesta, 200);


    }

    public static function OperacionesTodosEmpleados($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::OperacionesTodosLosEmpleados();
        return $response->withJson($objDelaRespuesta, 200);

    }

    public static function OperacionestodosSectores($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
	    $sector=$ArrayDeParametros['sector'];
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::CantidadOperacionesTodosSectores($sector);
        return $response->withJson($objDelaRespuesta, 200);

    }

    public static function OperacionesEmpleadoSeparado($request, $response, $args)
    {
        
        $idEmpleado=$args['idEmpleado'];
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::CantidadOperacionesEmpleadoSeparado($idEmpleado);
        return $response->withJson($objDelaRespuesta, 200);

    }
    
    public static function OperacionesEmpleadosSector($request, $response, $args)
    {
        
        $sector=$args['sector'];
        
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::CantidadOperacionesEmpleadoPorSector($sector);
        return $response->withJson($objDelaRespuesta, 200);

    }

    public static function CambiarAvatarApi($request, $response, $args)
	{
			
		$ArrayDeParametros = $request->getParsedBody();
        
        
        //datos del arhivo 
        $nombre_archivo = $_FILES['avatar']['name']; 
        $tipo_archivo = $_FILES['avatar']['type']; 
        $tamano_archivo = $_FILES['avatar']['size']; 
        //compruebo si las características del archivo son las que deseo 
        // if (!((strpos($tipo_archivo, "gif") || strpos($tipo_archivo, "jpeg")) && ($tamano_archivo < 100000))) { 
        //     echo "La extensión o el tamaño de los archivos no es correcta. <br><br><table><tr><td><li>Se permiten archivos .gif o .jpg<br><li>se permiten archivos de 100 Kb máximo.</td></tr></table>"; 
        // }else{ 
        //     if (move_uploaded_file($HTTP_POST_FILES['userfile']['tmp_name'], $nombre_archivo)){ 
        //         echo "El archivo ha sido cargado correctamente."; 
        //     }else{ 
        //         echo "Ocurrió algún error al subir el fichero. No pudo guardarse."; 
        //     } 
        // } 







        $id=$ArrayDeParametros['id'];
       // $avatar=$_FILES['avatar'];
        $avatar= file_get_contents($_FILES['avatar']['tmp_name']);
           
        
        $objDelaRespuesta= new stdclass();
        $objDelaRespuesta=Empleado::CambiarAvatar($id,$avatar);
        
        return $response->withJson($objDelaRespuesta, 200);

		
		
	}
   
    

    


}