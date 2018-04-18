import React from 'react';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';

import { TabBar, Carousel, WingBlank, Icon } from 'antd-mobile';

class Demo extends React.Component {
constructor(props) {
 super(props);
 this.state = {
   selectedTab: 'redTab',
   hidden: false,
   fullScreen: false,
   data: ['1', '2', '3'],
   imgHeight: 176,
 };
}
componentDidMount() {
  // simulate img loading
  setTimeout(() => {
    this.setState({
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    });
  }, 100);
}
renderContent(pageText) {
 return (
   <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
     <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>

   </div>
 );
}

render() {
 return (
   <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
     <TabBar
       unselectedTintColor="#949494"
       tintColor="#33A3F4"
       barTintColor="white"
       hidden={this.state.hidden}
     >
       <TabBar.Item
         title="主页"
         key="Life"
         icon={<div style={{
           width: '22px',
           height: '22px',
           background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
         />
         }
         selectedIcon={<div style={{
           width: '22px',
           height: '22px',
           background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
         />
         }
         selected={this.state.selectedTab === 'blueTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'blueTab',
           });
         }}
         data-seed="logId"
       >
         <div><span>为顾客量体裁衣，智慧推荐最适合的保险</span><Icon type='check' /></div>

         <WingBlank>
         <div><span>今日热推</span><Icon type='check' /><Icon type='check' /></div>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
       </TabBar.Item>
       <TabBar.Item
         icon={
           <div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
           />
         }
         selectedIcon={
           <div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
           />
         }
         title="顾客"
         key="Koubei"
         selected={this.state.selectedTab === 'redTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'redTab',
           });
         }}
         data-seed="logId1"
       >
         {this.renderContent('顾客')}
       </TabBar.Item>
       <TabBar.Item
         icon={
           <div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
           />
         }
         selectedIcon={
           <div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
           />
         }
         title="计划书"
         key="Friend"
         selected={this.state.selectedTab === 'greenTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'greenTab',
           });
         }}
       >
         {this.renderContent('计划书')}
       </TabBar.Item>
       <TabBar.Item
         icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
         selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
         title="全产品搜索"
         key="my"
         selected={this.state.selectedTab === 'yellowTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'yellowTab',
           });
         }}
       >
         {this.renderContent('全产品搜索')}
       </TabBar.Item>
     </TabBar>
   </div>
 );
}
}

export default createForm()(Demo);
