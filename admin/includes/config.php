<?php

    require __DIR__.'/vendor/autoload.php';

    use Kreait\Firebase\Factory;
    use Kreait\Firebase\ServiceAccount;

    $serviceAccount = ServiceAccount::fromJsonFile(__DIR__.'/yeba-m-boka-firebase-adminsdk-7pi7l-28d62b8879.json');
    $firebase = (new Factory)
        ->withServiceAccount($serviceAccount)
        ->withDatabaseUri('https://yeba-m-boka-default-rtdb.firebaseio.com/')
        
        ->create();

    $database = $firebase->getDatabase();
    // $storage = $firebase->getStorage();


?>