<?php



require APPPATH . 'libraries/REST_Controller.php';



class Products_pizza extends REST_Controller
{



    /**

     * Get All Data from this method.

     *

     * @return Response
 
     */

    public function __construct()
    {

        parent::__construct();
        // header("Access-Control-Allow-Origin: *");
        header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header("Access-Control-Allow-Methods: GET, POST, GET, PUT");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        $this->load->database();
    }



    /**

     * Get All Data from this method.

     *

     * @return Response

     */

    public function index_get($id = 0)

    {

        if (!empty($id)) {

            $data = $this->db->get_where("pj_pro_pi", ['id' => $id, 'is_deleted' => "0"])->row_array();
        } else {

            $data = $this->db->get_where("pj_pro_pi", ['is_deleted' => "0"])->result();
        }



        $this->response($data, REST_Controller::HTTP_OK);
    }



    /**

     * Get All Data from this method.

     *

     * @return Response

     */

    public function index_post()

    {

        $input = $this->input->post();

        $this->db->insert('pj_pro_pi', $input);



        $this->response(['Item created successfully.'], REST_Controller::HTTP_OK);
    }



    /**

     * Get All Data from this method.

     *

     * @return Response

     */

    public function index_put($id)

    {

        $input = $this->put();

        $this->db->update('pj_pro_pi', $input, array('id' => $id));



        $this->response(['Item updated successfully.'], REST_Controller::HTTP_OK);
    }



    /**

     * Get All Data from this method.

     *

     * @return Response

     */

    public function index_delete($id)

    {

        $this->db->delete('pj_pro_pi', array('id' => $id));



        $this->response(['Item deleted successfully.'], REST_Controller::HTTP_OK);
    }

    public function test()
    {
        echo json_encode("dasd");
    }
}
