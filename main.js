
    let blockchainExample =new BlockChain();
    
    console.log('Mining Block 1- ');
    blockchainExample.addBlock(new Block("10/07/2017",{ amount :4 }));
    
    console.log('Mining Block 2- ');
    blockchainExample.addBlock(new Block("12/07/2017" ,{ amount :8 }));
    console.log('Is BlockChain Valid ?'+ blockchainExample.isChainValid());
    
    blockchainExample.chain[1].data ={amount:100};
    blockchainExample.chain[1].hash =blockchainExample.chain[1].calculateHash();
    console.log('Is BlockChain Valid ?'+ blockchainExample.isChainValid());

    // console.log(JSON.stringify(blockchainExample,null,4));


    blockchainExample.createTransaction(new Transaction('address1','address2',100));
    blockchainExample.createTransaction(new Transaction('address2','address1',50));
    
    console.log('\n Starting the miner ');
    blockchainExample.minePendingTransactions('xaviers-address');

    console.log('\n Balance of xaviers is ',blockchainExample.getBalanceOfAddress('xaviers-address'));
    
    console.log('\n Starting the miner again ');
    blockchainExample.minePendingTransactions('xaviers-address');

    console.log('\n Balance of xaviers is ',savjeeCoin.getBalanceOfAddress('xaviers-address'));

    


    // const {BlockChain,Transaction} =require('./blockchain');
    // const EC =require(elliptic).ec;
    // const ec =new EC('secp256k1');
    // const myKey =ec.keyFormPrivate('');
    // const myWalletAddress =myKey.getPublic('hex');

    

    // let blockchainExample =new BlockChain();
    // const tx1 =new Transaction(myWalletAddress,'public key goes here',10);
    // tx1.signTransaction(myKey);
    // blockchainExample.addTransaction(tx1);
    // console.log('\n Starting the miner ');
    // blockchainExample.minePendingTransactions(myWalletAddress);
    // console.log('\n Balance of xaviers is ',blockchainExample.getBalanceOfAddress(myWalletAddress));
    // blockchainExample.chain[1].transactions[0].amount =1;
    // console.log('Is chain valid?',blockchainExample.isChainValid());



  

 