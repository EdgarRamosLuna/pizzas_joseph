<?php class Tabla_usuarios_clientes extends MY_Model{
	public function __construct(){
		parent::__construct();
		$this->table_name = 'usuarios_clientes';
	}
    
}