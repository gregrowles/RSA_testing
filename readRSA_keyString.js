const NodeRSA = require('node-rsa');

const keyData = `-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJBAIFgr5h9epJaYMzavOO/vygpsBUKBFewexxNMZBH0JPyz28pd+OF
0sx1J1XrYpupy4BLh15awBo0QCbskW/TgnsCAwEAAQI/WHC/mH4uS918To04kneB
NPNKaxdt4IPDpJUgTIDLFFbt1RX1ZzKJfCHI02m0DM9NaKz+zMl0Po/8r2J3oDrh
AiEAxU+R87J0eqZGUfNKl0rtJuX7bV83F4ZOeSq1KemFywsCIQCn3EddcTSKWd37
ezU7RzWLahIR/Ig5WtJr7QtLtwVMUQIgaaK7IjyljdCdj1xwz+UmaI/yd1DlvuuB
8e8ChQjoP5cCIF2T0HkIHgkutjB27CMCvJfe5vn99Rc8SWf/OrfX7O0xAiBFygR1
vdyGC69T1UMMD5jc2jaSVdLnUb7z+jNIM96Ckw==
-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA().importKey( keyData, 'pkcs1' );


const publicDer = key.exportKey('pkcs8-public-der');
const privateDer = key.exportKey('pkcs1-der');