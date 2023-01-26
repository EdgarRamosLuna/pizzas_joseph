<?php class Tabla_productos_mp extends MY_Model{
	public function __construct(){
		parent::__construct();
		$this->table_name = 'pj_pro_mp';
	}
    public function getAll()
	{
		$query = $this->db->get_where('pj_pro_mp', array('is_ing' => 1));
		return $query;
	}
}