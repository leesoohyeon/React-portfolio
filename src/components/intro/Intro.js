import React, { Component } from 'react';
import styled from 'styled-components';
import {FlexBox} from '../reusuable/style'

const IntroContainer = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 60px;  
    width : 700px;
    height: 470px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
    .label{
      font-weight: bold;
      text-align: right;
    }
    .me{
      width: 95%;
      
    }
    .skill{
      font-weight: bold;
      font-size: 24px;
      padding:5px;
    }
    .logo{
      width: 50%;
      margin-top: 5px;
    }
    .job{
      color: #aaa;
      font-Size: 18px;
      letter-spacing: 1.5px;
    }
    .name{
      font-size: 24px;
      font-weight:bold;
      margin-top: 5px;
      border-bottom: 0.5px solid black;
      padding-bottom:10px;
      width:90%;
    }
    #png{
      text-align: center;
      
    }
`;

const Box = styled.div`
  position:relative;
  bottom:0;
  height: 70px;
  background-color: white;
  width: 100%;
  padding: 0px 0;
`;

class Intro extends Component {
  render() {
    return(
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{padding:"25px"}}>
              <img className="me" alt="" src={require('../../img/lee.jpg')}/>
            </div>
            <div className="flex-6" style={{padding:"25px"}}>
              <div className="job">Developer</div>
              <div className="name">이수현</div>
              <br/>
              <FlexBox>
                <div  className="flex-2 label">생년월일</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6">1998년 05월 20일</div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">학력</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6">영남이공대학교</div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">전공</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6">기계계열</div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">E-Mail</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6">ehfrhfo402@naver.com</div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">휴대전화</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6">010-4856-3413</div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">GitHub</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6"><a href="https://github.com/leesoohyeon" target="_blank" >https://github.com/leesoohyeon</a></div>
              </FlexBox>
              <FlexBox style={{marginTop:"7px"}}>
                <div  className="flex-2 label">Blog</div>
                <div className="flex-1">&nbsp;</div>
                <div  className="flex-6"><a target="_blank" href="https://su-hyun07.tistory.com/1">https://su-hyun07.tistory.com/1</a></div>
              </FlexBox>
            </div>
          
          </FlexBox>
         
          <Box>
            
            <FlexBox style={{padding:"5px"}}> 
            <div className="flex-1" id="png">
              <img className="logo" alt="" src={require('../../logo/java.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/c-sharp.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/python.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/js.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/html-5.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/mysql.png')}/>
            </div>
            <div className="flex-1" id="png">
            <img className="logo" alt="" src={require('../../logo/oracle.png')}/>
            </div>
            </FlexBox>
          </Box>
        </IntroContainer>
    );
  }
}

export default Intro;