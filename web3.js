const express = require('express')
const app = express()
const port = 3000
const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io"))

let ABI=[
	{
		"inputs": [],
		"name": "A",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

let CA = "0x111882aF215073E47b2AC5ee8c1361543C2E5cc3"

let Contract = new web3.eth.Contract(ABI,CA)

async function getAddress() {
    try {
        address_ = Contract.methods.A().call();
		res.send(address_);
    } catch (e) {
        console.log(e);
        return e;
    }
}

app.get('/address', function(req,res){
    address_ = getAddress();
	res.send(address_);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})