[
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "matchNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "who",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "option",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "gameRecord",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "playScissors",
		"outputs": [
			{
				"internalType": "string",
				"name": "matchResult",
				"type": "string"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "playsPapper",
		"outputs": [
			{
				"internalType": "string",
				"name": "matchResult",
				"type": "string"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "playsRocks",
		"outputs": [
			{
				"internalType": "string",
				"name": "matchResult",
				"type": "string"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withDrawal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allMatchRecord",
		"outputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "option",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "matchResult",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "checkPlayer",
				"type": "address"
			}
		],
		"name": "checkPlayerRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "playRounds",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "win",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lose",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tie",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalRound",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]