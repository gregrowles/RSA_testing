const NodeRSA = require('node-rsa');
const fs = require('fs');

// Create some sample data that we want to sign
const dataToBeSigned = '*** hello RSA, please sign me ***';

fs.readFile( 'pem/rsa1.pem', 'utf-8', function( err, privateKeyData ){

    //console.log( 'privateKeyData', privateKeyData );

    const key = new NodeRSA().importKey( privateKeyData, 'pkcs1' );
    const signed = key.sign( dataToBeSigned, 'base64', 'utf8' );

    console.log( 'sign Message: ', dataToBeSigned.toString('base64') ) ;
    console.log( 'signature: ', signed.toString('base64') ) ;

});
