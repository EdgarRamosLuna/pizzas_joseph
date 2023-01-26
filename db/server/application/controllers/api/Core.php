<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Core extends CI_Controller
{
    public function __construct()
    {
        /*  header("Access-Control-Allow-Origin: *");
                header("Access-Control-Allow-Headers: X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization");
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE");
                $method = $_SERVER['REQUEST_METHOD'];
                if($method == "OPTIONS"){
                die();
                }*/
        parent::__construct();
        header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header("Access-Control-Allow-Methods: GET, POST, GET, PUT");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        $this->load->model('tabla_productos_pizza');
        $this->load->model('tabla_productos_others');
        $this->load->model('tabla_productos_mp');
        $this->load->model('tabla_productos');
        $this->load->model('tabla_usuarios_clientes');
        
        
    }
    public function get()
    {


        $query = $this->tabla_productos_pizza->findAll();
        $query = $query->result();

        $query2 = $this->tabla_productos_mp->getAll();
        $query2 = $query2->result();

        $query3 = $this->tabla_productos_others->findAll();
        $query3 = $query3->result();

        $result = array(
            'pizza' => $query, 
            'mp' => $query2,
            'op' => $query3,
        );

        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($result));

        
        
      //  $queryID = $this->tabla_clientes_tienda->findByField('session_token', $id);
    } 
    public function get_clients()
    {


        $query = $this->tabla_usuarios_clientes->findAll();
        $query = $query->result();


        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($query));
        
      //  $queryID = $this->tabla_clientes_tienda->findByField('session_token', $id);
    } 
    public function save()
    {
        $formdata = json_decode(file_get_contents('php://input'), true);
        $type = $formdata['type'];
        $data = $formdata['data'];
        $id_item = $formdata['id'];
        if($type === 1){
            $dataI = array(
     
                'id_item' =>$id_item,
                'size' => $data['size'],
                'price' => $data['price'],
                'exin' => $data['exin'],
                'chstedm' => $data['chstedm'],
                'chstedp' => $data['chstedp'],
                'exch' => $data['exch'],
                'fin' => $data['fin'],
                'pas' => $data['pas'],
            );

            $this->tabla_productos_pizza->insertData($dataI);
            $id =$this->db->insert_id();
            $newData = array(
                'id' =>$id,
                'id_item' =>$id_item,
                'size' => $data['size'],
                'price' => $data['price'],
                'exin' => $data['exin'],
                'chstedm' => $data['chstedm'],
                'chstedp' => $data['chstedp'],
                'exch' => $data['exch'],
                'fin' => $data['fin'],
                'pas' => $data['pas'],
            );
           // echo json_encode($newData);
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($newData));
        }
        if($type === 2){
            $dataI = array(
                'id_item' =>$id_item,
                'product' => $data['product'],
                'price' => $data['price'],
                'ha' => $data['ha'],
                'sal' => $data['sal'],
                'doca' => $data['doca'],
            );
            $this->tabla_productos_others->insertData($dataI);
            $id =$this->db->insert_id();
            $newData = array(
                'id' =>$id,
                'id_item' =>$id_item,
                'product' => $data['product'],
                'price' => $data['price'],
                'ha' => $data['ha'],
                'sal' => $data['sal'],
                'doca' => $data['doca'],
            );
            
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($newData));
        }
        if($type === 3){
            //if($data['is_ing'])
            $dataI = array(
                'id_item' => $id_item,
                'is_ing' => $data['is_ing'],
                'name' => $data['name'],
                'cant' => $data['cant'],
            );
            $this->tabla_productos_mp->insertData($dataI);
            $id =$this->db->insert_id();
        
            $newData = array(   
                'id' =>$id,
                'id_item' =>$id_item,
                'is_ing' => $data['is_ing'],
                'name' => $data['name'],
                'cant' => $data['cant'],
            );
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($newData));
        }
      //  $queryID = $this->tabla_clientes_tienda->findByField('session_token', $id);
    }
    public function searchItem(){
        $formdata = json_decode(file_get_contents('php://input'), true);
        $val = $formdata['val'];

        $query = $this->tabla_productos->searchItem($val);
        $query = $query->result();

        $query2 = $this->tabla_productos->searchItem2($val);
        $query2 = $query2->result();

        $query3 = $this->tabla_productos->searchItem3($val);
        $query3 = $query3->result();

        $result = array(
            'pizza' => $query, 
            'mp' => $query2,
            'op' => $query3,
        );

        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($result));

    }
}
