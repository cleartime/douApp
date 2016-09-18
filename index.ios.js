var React = require('react-native');
var Navigation = require('./iOS_views/common/navigation');
var Book = require('./iOS_views/book/book_list');
var Music = require('./iOS_views/music/music');
var Movie = require('./iOS_views/movie/movie');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ScrollView,
  StatusBarIOS
} = React;

// StatusBarIOS.setHidden(true);
var douApp = React.createClass({
    
  getInitialState: function(){
    return {
      selectedTab: '主页'
    };
  },
  render: function() {
    return (
      <TabBarIOS tintColor="white"
                 barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="主页"
          selected={this.state.selectedTab === '主页'}
          icon={require('image!book')}
          onPress={() => {
            this.setState({
              selectedTab: '主页'
            });
          }}>
          <Navigation component={Book}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="标签"
          selected={this.state.selectedTab === '标签'}
          icon={require('image!movie')}
          onPress={() => {
            this.setState({
              selectedTab: '标签'
            });
          }}>
          <Navigation component={Movie}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="我的"
          selected={this.state.selectedTab === '我的'}
          icon={require('image!music')}
          onPress={() => {
            this.setState({
              selectedTab: '我的'
            });
          }}>
          <Navigation component={Music}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('douApp', () => douApp);

