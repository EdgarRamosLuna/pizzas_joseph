<?php class Tabla_productos extends MY_Model
{
    public function __construct()
    {
        parent::__construct();
        //	$this->table_name = 'pj_pro_pi';
    }


    public function searchItem($busquedaVal)
    {
        $this->db->select('p.id as id_pizza, p.size as tamaño, p.price as pizza_price, p.exin, p.chstedm, p.chstedp, p.exch, p.fin, p.pas');
        $this->db->from('pj_pro_pi as p');


        //$this->db->where('p.nombre', $busquedaVal);

        $this->db->where("((p.size LIKE '%$busquedaVal%' ESCAPE '!'))");
        /*$this->db->like('(p.descripcion',$busquedaVal);
        $this->db->or_like('c.nombre', $busquedaVal);
        $this->db->or_like("p.nombre LIKE '%$busquedaVal%')");*/
       // $this->db->where('p.status', 1);
        $this->db->where('p.is_deleted', 0);
     //   $this->db->where('p.status', 1);

        $this->db->group_by('p.id');

        $query = $this->db->get();
        return $query;
    }
    public function searchItem2($busquedaVal)
    {
        $this->db->select('p.*');
        $this->db->from('pj_pro_mp as p');
        $this->db->where("((p.name LIKE '%$busquedaVal%' ESCAPE '!'))");
        $this->db->where('p.is_deleted', 0);
        $this->db->group_by('p.id');
        $query = $this->db->get();
        return $query;
    }
    public function searchItem3($busquedaVal)
    {
        $this->db->select('p.*');
        $this->db->from('pj_pro_op as p');
        $this->db->where("((p.product LIKE '%$busquedaVal%' ESCAPE '!'))");
        $this->db->where('p.is_deleted', 0);
        $this->db->group_by('p.id');
        $query = $this->db->get();
        return $query;
    }

    
}