<?php

$page = $_GET['page'];

if(!isset($page) || $page == ""){
require   'index.html';
}
//Check to see if the file exists
else if(file_exists($page.'.html')){
//if so, require it
require  $page.'.html';
} else {
//if not, returna 404 error
require  '404.html';
exit;
}

?>