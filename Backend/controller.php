<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

	function optionsCatalogue (Request $request, Response $response, $args) {
	    
	    // Evite que le front demande une confirmation à chaque modification
	    $response = $response->withHeader("Access-Control-Max-Age", 600);
	    
	    return addHeaders ($response);
	}

	function hello(Request $request, Response $response, $args) {
	    $array = [];
	    $array ["nom"] = $args ['name'];
	    $response->getBody()->write(json_encode ($array));
	    return $response;
	}

    function  getSearchCalatogue (Request $request, Response $response, $args) {
        $filtre = $args['filtre'];
        $flux = file_get_contents('../assets/mock/products.json');

        if ($filtre) {
          $data = json_decode($flux, true);

        $res = array_filter($data, function($obj) use ($filtre)
        {
            return strpos($obj["designation"], $filtre) !== false;
        });
        $response->getBody()->write(json_encode(array_values($res)));
        } else {
         $response->getBody()->write($flux);
        }

        return addHeaders ($response);
    }

	// API Nécessitant un Jwt valide
	function getCatalogue (Request $request, Response $response, $args) {
	    $productsFromJson = file_get_contents('../assets/mock/products.json');
	    $data = json_decode($productsFromJson, true);

	    if ($data === null) {
            $response->getBody()->write("Erreur lors du décodage JSON");
            return $response->withStatus(500); // Code HTTP 500 pour une erreur interne du serveur
        }

	    $flux = json_encode($data);
	    $response->getBody()->write($flux);
	    
	    return addHeaders ($response);
	}

	function optionsUtilisateur (Request $request, Response $response, $args) {
	    
	    // Evite que le front demande une confirmation à chaque modification
	    $response = $response->withHeader("Access-Control-Max-Age", 600);
	    
	    return addHeaders ($response);
	}

	// API Nécessitant un Jwt valide
	function getUtilisateur (Request $request, Response $response, $args) {
	    
	    $payload = getJWTToken($request);
	    $login  = $payload->userid;
	    
		$flux = '{"nom":"martin","prenom":"jean"}';
	    
	    $response->getBody()->write($flux);
	    
	    return addHeaders ($response);
	}

	// APi d'authentification générant un JWT
	function postLogin (Request $request, Response $response, $args) {

       $body = $request->getParsedBody();
        $login = $body['login'];
        $password = $body['password'];

        if ($login === 'emma' && $password === 'toto') {
            $data = [
               "nom" => "BELLOT",
               "prenom" => "Ian"
            ];

            $response = createJWT($response);

            $response->getBody()->write(json_encode($data));

            return addHeaders($response);
        } else {
            $response->getBody()->write("Identifiants invalides");

            return $response->withStatus(401);
            }
	}

