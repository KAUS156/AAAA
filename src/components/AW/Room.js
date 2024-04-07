import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room =() =>{
    const{roomID}=useParams();
    console.log(roomID);
    const metting = async(element) =>{
        const appID=2138512890;
        const serverSecret="9327aa5019119b6ca6b71cb28058c43d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest
        (appID,
            serverSecret,
            roomID,
            Date.now().toString (),
        "KAUSHAL");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
    },
});


    };

  return (
    <div ref={metting} style ={{width:"100vw",height:"100vh"}}></div>
  )
};
export default  Room;