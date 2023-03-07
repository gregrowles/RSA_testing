const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
 
//const privateDer = key.exportKey('pkcs1-der');
const key_pkcs1_pvt = key.exportKey( 'pkcs1' );         //'private' or 'pkcs1' or 'pkcs1-private' == 'pkcs1-private-pem' — private key encoded in pcks1 scheme as pem string.
const key_pkcs8_pub = key.exportKey( 'pkcs8-public' );  //'public' or 'pkcs8-public' == 'pkcs8-public-pem' — public key encoded in pcks8 scheme as pem string.
const key_pkcs8_pvt = key.exportKey( 'pkcs8-private' ); //'pkcs8' or 'pkcs8-private' == 'pkcs8-private-pem' — private key encoded in pcks8 scheme as pem string.

const publicKey_openssh = key.exportKey( 'openssh' );


console.log( 'key_pkcs1_pvt (RSA): ', key_pkcs1_pvt );
console.log( 'key_pkcs8_pub: ', key_pkcs8_pub );
console.log( 'key_pkcs8_pvt: ', key_pkcs8_pvt );
console.log( 'publicKey_openssh: ', publicKey_openssh );


const text = 'Hello RSA! Here is my public key: ' + key_pkcs8_pub;

const encrypted = key.encrypt( text, 'base64' );
console.log( 'encrypted: ', encrypted, '');

const decrypted = key.decrypt(encrypted, 'utf8');
console.log( 'decrypted: ', decrypted, '');