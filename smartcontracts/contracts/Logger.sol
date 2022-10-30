//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

contract Logger{
    event nftlogged(
        address owner,
        address nft
    );

    function AddNft(address nftaddress) public {
        emit nftlogged(msg.sender,nftaddress);
    }
}