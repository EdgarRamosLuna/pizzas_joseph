<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        // $this->load->model('login_model');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE");
        $this->load->model('tabla_usuarios_admin');
        $this->_siteKey = 'aKD746fgho86vo86bo8o87019238019238ybo535fasasdasddsdfAsthd456rtyhdKLs8793wqgiluhedfgd123j2334hjk589';
        date_default_timezone_set('America/Monterrey');
    }

    public function index()
    {

        $data = json_decode(file_get_contents('php://input'), true);
        //     $formdata = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'];


        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($data));
    }
    private function randomString($length = 50){
		$string = '';
		$characters = 'ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for($i=0; $i < $length; $i++){
			$string .= $characters[rand(0,strlen($characters)-1)];
		}//fin del for que genera el randomString

		return $string;
	}//fin de la funcion de randomString
    
    private function hashData($data) {
        //En esta función se hace el hash512 para la comprobación de passwords
        return hash_hmac("sha512", $data, $this->_siteKey);
    }//final de la funcion para hashear el pass
    function checar_login() {
        //Aqui se hace la comprobación de que todos los datos sean correctos para ingresar al sistema
        //regresa TRUE si todo esta bien o FALSE si hubo algún error
        $requestData = json_decode(file_get_contents('php://input'), true);
        if(empty($requestData)){
            return false;
        }

        foreach ($requestData as $key => $val){
                $val = filter_var($val, FILTER_SANITIZE_STRING); // Remove all HTML tags from string
                $requestData[$key] = $val;
        }
        $username = $requestData['username'];
        $password = $requestData['password'];


        
        //var_dump($requestData);
        //die();
       // $username = $_POST['usuario'];
        //$password = $_POST['password'];
        
        $query = $this->tabla_usuarios_admin->findByField('username', $username);

        //var_dump($query->result());
        
        if ($query->num_rows() == 1) {
            //Si se encontró un registro con ese username
           // echo 'entro';
            $query = $query->result();
            
            if($query[0]->is_deleted == 1){
            //    $this->form_validation->set_message('checar_login', 'Este usuario ha sido eliminado del sistema, favor de contactar al administrador.');
             //   return false;
            }
       
            
            $id = $query[0]->id;
          //  $nombre = $query[0]->nombre;
            $username = $query[0]->username;
        //    $usuario = $query[0]->usuario;
          //  $first_time = $query[0]->first_time;
           // $apellidos = $query[0]->apellidos;
            $pass_archivo = $query[0]->password;
            $password = $password . $query[0]->user_salt;
            $password = $this->hashData($password);
            //var_dump($password);
            $pass_temporal = $query[0]->password_temporal;
            
            $intentos = $query[0]->intentos;
            $last_login_attempt = $query[0]->last_login_attempt;
            $dif_tiempo = time() - $last_login_attempt;
            /*if($first_time == 0){
                $respuesta = array(
                            'error'     =>  TRUE,
                            'mensaje'   =>  "Tu cuenta aun no ha sido habilitada para el uso de la tienda, intentalo mas tarde.",
                            
                );
                echo json_encode($respuesta);
                die();
            }*/
            //Si el usuario llega a 4 intentos fallidos
            /*if($intentos == 4 && $dif_tiempo <= 60){
                $this->form_validation->set_message('checar_login', 'Tu cuenta ha sido bloqueada por 20 min por exceder el número de intentos permitidos.');
				return false;
            }

            if($intentos == 6){
                $this->form_validation->set_message('checar_login', 'Tu cuenta ha sido bloqueada por exceder el número de intentos permitidos. Favor de contactar al administrador para que te envie tus datos.');
				return false;
            }*/
                                   
            if(($password == $pass_archivo) || $password == $pass_temporal){
                //El password proporcionado por el usuario es correcto    

            //    var_dump("entro");
                $session_token = $this->randomString(36);
                $session_data = array(
                    'session'       =>  'ok',
                    'id'    =>  $id,
                    'username'        =>  $username,
              //      'nombre'        =>  $nombre,
                  //  'session_token' => $session_token,
                    
                );
                $data = array(
                    'intentos'               =>  0,
                    'last_login_attempt'     =>  time(),
                    'session_token' => $session_token,
                );
                $this->tabla_usuarios_admin->updateByField('username', $username, $data);
              //  $this->session->set_userdata(array("cliente"    =>  $session_data));
                $respuesta = array(
				             'error'     =>  FALSE,
				             'mensaje'   =>  "Bienvenido de vuelta a tu cuenta",
                             'cliente_id' => $session_token,
                             'session' => $session_data, 
				             
				 );
                 
		         echo json_encode($respuesta);
		         
                return true;
            } else {

                //Si el password es incorrecto se manda mensaje de error
                $data = array(
                    'intentos'               =>  $intentos + 1,
                    'last_login_attempt'     =>  time()
                );
                $this->tabla_usuarios_admin->updateByField('username', $username, $data);
			//	$this->form_validation->set_message('checar_login', 'Usuario o contraseña incorrecto..');
				$respuesta = array(
				             'error'     =>  TRUE,
				             'mensaje'   =>  "Error al intentar acceder a tu cuenta.",
				             
				 );
		         echo json_encode($respuesta);
				return false;
                
            }
        } else {
            //Si el username proporcionado no esta registrado en la base de datos se manda un error
            $respuesta = array(
				             'error'     =>  TRUE,
				             'mensaje'   =>  "No existe esta cuenta en la base de datos...",
				             
				 );
            echo json_encode($respuesta);
          //  $this->form_validation->set_message('checar_login', 'No existe este username en la base de datos..');
            return false;
        }
    }//fin de la función de checar login contra la base de datos del usuario
}
 
/*

<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class MiControlador extends CI_Controller
{
    public function index()
    {
        $this->output->set_content_type('application/json');
        $data = array('nombre' => 'Juan', 'edad' => 30);
        $this->output->set_output(json_encode($data));
    }
}

*/