const NodeRSA = require('node-rsa');
const fs = require('fs');

fs.readFile( 'pem/rsa1.pem', 'utf-8', function( err, keyData ){

    console.log( 'keyData', keyData );
    const key = new NodeRSA().importKey( keyData, 'pkcs1' );

    console.log( 'got here', err );
    //const keyData = '-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----';

    const key_pkcs1_pvt = key.exportKey( 'pkcs1' );         //'private' or 'pkcs1' or 'pkcs1-private' == 'pkcs1-private-pem' — private key encoded in pcks1 scheme as pem string.
    const key_pkcs8_pub = key.exportKey( 'pkcs8-public' );  //'public' or 'pkcs8-public' == 'pkcs8-public-pem' — public key encoded in pcks8 scheme as pem string.
    const key_pkcs8_pvt = key.exportKey( 'pkcs8-private' ); //'pkcs8' or 'pkcs8-private' == 'pkcs8-private-pem' — private key encoded in pcks8 scheme as pem string.

    const publicKey_openssh = key.exportKey( 'openssh' );


    console.log( 'key_pkcs1_pvt (RSA): ', key_pkcs1_pvt );
    console.log( 'key_pkcs8_pub: ', key_pkcs8_pub );
    console.log( 'key_pkcs8_pvt: ', key_pkcs8_pvt );
    console.log( 'publicKey_openssh: ', publicKey_openssh );


} );

