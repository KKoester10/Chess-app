import React from 'react'
import './../../index.css'
import ReactPlayer from 'react-player'


export default function AboutChess(){
    return <> 
     <div className='massivediv'>
     <h1 className='aboutchess'>Learn About Chess</h1>;
     <div className='massivediv1'>
    <div className='videotitles'>
         <h2>CHESS FOR BEGINNERS: <br /> <br /> 
         How to play chess properly, a guide for<br />  all beginners.
          This guide is designed to teach you<br /> the very basics of chess,
          chess openings, endgames, <br /> great tactics,and  excellent strategy. </h2>
         
         </div>
         
    <div className='player'>
        <ReactPlayer controls url='https://youtu.be/OCSbzArwB10'/>
         </div>
         <div className='videotitles'>
         <h2>History Of Chess: <br /> <br />
         A 2012 survey found that 605 million people <br />
         play chess regularly, nearly 1500 years after <br />
        the game was first played. The names of the pieces<br />
         and the moves may have changed, but <br />
         the rules that developed over a millennium <br />
         and a half represent a culmination of many <br />
         cultures and players that helped to develop<br />
          the Game of Kings. </h2>
         </div>
    <div className='player'>
        <ReactPlayer controls url='https://youtu.be/w2aCK1yT8Ms'/>
        </div>
    <div className='videotitles'>
         <h2>Chess Tips: <br /> <br />
         What is chess strategy? <br />
         The art of chess strategy is knowing <br />
         how to formulate a plan for the <br />
         chess game, and arrange your chess<br />
          pieces to accomplish this plan. <br />
          The chess strategy outlined in the video<br />
          will get any new chess player on the road<br />
        to understanding correct chess opening strategy <br />
        & how to control the chess board from move one. 
         
         
         
         
         </h2>
         </div>
    <div className='player'>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=goW1cFHaxtU'/>
          
    </div>
    <div className='videotitles'>
         <h2>Spotting Weaknesses: <br /> <br />
         
         Inadequately defended peices - <br />
         can I drive the defender of a piece off?<br />
         Bishops and knight mobility <br />
        can I block those pieces from entering the fray?<br />

Is he down to just bishops? <br /> 
Then a closed board creates a severe weakness for him.<br />

Is he down to just knights? <br />
 If so, an open board creates a severe weakness for him,<br />

Is his king in the center of the board?  <br />
If so, this is often a huge weakness?<br />
         
         
         
         
         </h2>

         </div>
    <div className='player'>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=YKEXns2Ed_0'/>
        
    </div>
    </div>
   </div>


    </>
}