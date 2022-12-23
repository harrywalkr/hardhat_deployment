// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//0x02a06598B57352a728bff1406Ca07Ec834DCbCa5

contract MetaverseAR is ERC721URIStorage {

        address owner;

        constructor() ERC721("MetaverseAR", "AR") {
              owner = msg.sender;
    }

     function mintItem(uint256 tokenId, string memory tokenURI) public
    {
        //DISCLAIMER -- NOT PRODUCTION READY CONTRACT
        //require(msg.sender == owner);

         _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}