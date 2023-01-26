<?php class Tabla_usuarios_admin extends MY_Model{
	public function __construct(){
		parent::__construct();
		$this->table_name = 'usuarios_admin';
	}
    
}