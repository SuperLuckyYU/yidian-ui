
import React from 'react';
import { Sudoku } from 'vocano-ui';


export default () => (
    <div>
        <Sudoku className='bang' images={1} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={'2'} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku imageClick={(iamges,index) => console.log(iamges,index)} images={['https://i1.go2yd.com/image.php?url=0XBLlpdAsV&type=jpeg_360x360', 'https://i1.go2yd.com/image.php?url=0X604KAvRU&type=jpeg_360x360', 'https://i1.go2yd.com/image.php?url=0XBLlp2Buz&type=jpeg_360x360']} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'} />
        <Sudoku images={4} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={5} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={6} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={7} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={8} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
        <Sudoku images={9} waterMark={'https://si1.go2yd.com/get-image/0tPBfE2Pei5'}/>
    </div>
  );
