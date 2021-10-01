import Web3 from "web3";
import TokenABI from "../constant/tokenABI.json";
import { tokenAddress } from "../constant";

const { ethereum } = window;
const web3 = new Web3(ethereum);

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export const getUserAccount = async () => {
  // Load account
  if (window.web3 !== undefined) {
    // window.web3.currentProvider.isTrust = true;
    // window.web3.currentProvider.isMetaMask = false;
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.web3.eth.getAccounts();
    const userAccount = accounts[0];
    console.log(userAccount);
    return userAccount;
  } else {
    return null;
  }
};

export const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum);
  // console.log(ethereum, ethereum.isMetaMask, "$$$$$$4444444444444");
  // return Boolean(ethereum && ethereum.isMetaMask);
};

export const makeMiniAddress = (address) => {
  if (address) {
    let s1 = address.substr(0, 5);
    let s2 = "....";
    let s3 = address.substr(address.length - 3);
    return s1 + s2 + s3;
  } else {
    return null;
  }
};

export const getUserEthBalance = async (address) => {
  const balance = await window.web3.eth.getBalance(address);
  const b = await window.web3.utils.fromWei(balance, "ether");
  return b;
};

// export const getTokenContractInstance = () => {
//   let newTokenContract = new web3.eth.Contract(
//     JSON.parse(TokenABI.result),
//     TokenAddress
//   );
//   return newTokenContract;
// };
export const getTokenContractInstance = () => {
  let newHumanTokenContract = new web3.eth.Contract(
    JSON.parse(TokenABI.result),
    tokenAddress
  );
  return newHumanTokenContract;
};

export const _isValidChainId = async () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  if (isMetaMaskInstalled()) {
    const chainID = await web3.eth.net.getId();
    if (chainID === 97) {
      // BSC testnet for demo version
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const getBalance = async () => {
  let suprContract = await getTokenContractInstance();
  let userAddress = await getUserAccount();
  if (suprContract && userAddress) {
    const temp = await suprContract.methods.balanceOf(userAddress).call();
    return temp;
  } else {
    return 0;
  }
};
