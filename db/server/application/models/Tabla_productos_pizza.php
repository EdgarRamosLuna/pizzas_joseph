<?php class Tabla_productos_pizza extends MY_Model{
	public function __construct(){
		parent::__construct();
		$this->table_name = 'pj_pro_pi';
	}
    
    function buscarExisteCategoria($nombreCategoria){
        $this->db->where('nombre', $nombreCategoria);
        $this->db->where('is_deleted', 0);
        $query = $this->db->get('pj_pro_pi');
        return $query;
    } 


    function getAllCategorias(){
        $this->db->where('is_deleted', 0);
        $this->db->order_by('nombre', 'asc');
        $query = $this->db->get('pj_pro_pi');
        return $query;
    }

    function getCategoryById($id){
        $this->db->where('id', $id);
        $this->db->where('is_deleted', 0);
        $query = $this->db->get('pj_pro_pi');
        return $query;
    }
    function existeCategoria($categoria_id, $textoCategoria){
        $this->db->where('nombre', $textoCategoria);
        $this->db->where('id !=', $categoria_id);
        $this->db->where('is_deleted', 0);
        $query = $this->db->get('pj_pro_pi');
        return $query;
    }

}