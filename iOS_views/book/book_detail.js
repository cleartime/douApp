import Util from './../common/util' ;
import Header from './../common/header' ;
import ServiceURL from './../common/service' ;
import BookItem from './book_item' ;
// import NavigationBar from './../common/navigationBar' ;

import React,{
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

//import marked from 'marked';
//import Prism from 'prismjs';
//import 'prismjs/themes/prism.css';




module.exports = React.createClass({
  getInitialState: function(){
    return{
      data: null
    };
  },
  markContent: function(data){
      //var newdata;
      //marked.setOptions({ highlight: (code) => Prism.highlight(code, Prism.languages.javascript),
      //});
      //marked(data, (err, content) => {
      //    if (!err) {
      //        newdata = content;
      //        return newdata;
      //    }
      //});
      return data
  },
  render: function(){
    return(
        <View style={[styles.m10]}>
            <Header
                navigator={this.props.navigator}
                initObj={{
                    backName: '主页',
                    title: this.state.data?this.state.data.title:'',
                }}/>
          <ScrollView style={styles.m10} >
            {
              this.state.data ?
                  <View>
                    <BookItem row={this.state.data}/>
                    <View>
                      <Text style={[styles.title]}>图书简介</Text>
                      <Text style={styles.text}>{this.state.data.title}</Text>
                    </View>

                    <View>
                      <Text style={[styles.title]}>作者简介</Text>
                      <Text style={styles.text}>{this.markContent(decodeURIComponent(this.state.data.content))}</Text>
                    </View>
                    <View style={{height:50}}></View>
                  </View>
                  : Util.loading
            }
          </ScrollView>
        </View>

    );
  },

  componentDidMount: function(){
    var objectId = this.props.id;
    var url = ServiceURL.get_article +'?'+ Util.transformRequest({objectId});
      var that = this;
    Util.get(url, function(data){
      that.setState({
        data: data.data
      });
    }, function(err){
      alert(err);
    });
  }
});

var styles = StyleSheet.create({
  m10:{
    flex:1,
  },
  title:{
    fontSize:16,
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  text:{
    marginLeft:10,
    marginRight:10,
    color:'#000D22'
  }
});


