<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Process_json
{
    public function __construct()
    {
        $this->CI=& get_instance();
    }
 
    public function process()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        if (is_array($data)) {
            $this->CI->input->post = array_merge($this->CI->input->post, $data);
        }
    }
}

