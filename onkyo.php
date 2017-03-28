<?php
    $command = $_GET['command'];
    $params = $_GET['params'];
 
    $hostname = '10.0.0.14';
    $port = 60128;
 
    switch ($command)
    {
        case 'PWR':
        case 'AMT':
        case 'SLI':
        case 'TUN':
            $message = '!1' . $command . $params;
            break;
        case 'MVL':
            if ($params > 60)
                exit(1);
            $message = '!1' . $command . strtoupper(str_pad(dechex($params), 2, '0', STR_PAD_LEFT));
            break;
        default:
            exit(1);
    }
    print $message;
 
    $fp = pfsockopen($hostname, $port);
    $packet = "ISCP\x00\x00\x00\x10\x00\x00\x00" . chr(strlen($message) + 1) . "\x01\x00\x00\x00" . $message . "\x0D";
    fwrite($fp, $packet);
    fclose($fp);
?>