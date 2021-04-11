import { ChainId, Fetcher, Pair, Token, WETH } from '@uniswap/sdk';

console.log("|================PRINTING CHAIN IDs================|")
console.log(`The chainId of MAINNET is ${ChainId.MAINNET}`);
console.log(`The chainId of RINKEBY is ${ChainId.RINKEBY}`);
console.log(`The chainId of ROPSTEN is ${ChainId.ROPSTEN}`);
console.log(`The chainId of GÖRLI is ${ChainId.GÖRLI}`);
console.log(`The chainId of KOVAN is ${ChainId.KOVAN}`);

console.log("|=========== GETTING TOKEN DETAILS ===========|");
const chainId = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const decimals = 18;

const tokenDAI = new Token(chainId, tokenAddress, decimals);

// const fetchDAI = await Fetcher.fetchTokenData(chainId, tokenAddress)

// console.log({ tokenDAI });
// console.log({ fetchDAI });

console.log("|============= GETTING PAIR DETAILS ===============|")

async function getPair() {
    // const pairAddress = Pair.getAddress(tokenDAI, WETH[tokenDAI.chainId]);
    // const reserves = await Fetcher.fetchPairData(tokenDAI, WETH[tokenDAI.chainId]);
    // const [reserve0, reserve1] = reserves;

    // const tokens = [tokenDAI, WETH[tokenDAI.chainId]]
    // const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]];

    const pair = await Fetcher.fetchPairData(tokenDAI, WETH[tokenDAI.chainId])
    console.log(pair);
}

getPair();