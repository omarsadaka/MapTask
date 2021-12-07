import React, { useState, useContext , useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors,Dimensions,Fonts} from '../../theme';
import {Icon  , Input} from 'react-native-elements';
import { List } from '../../component/cardItem';
import { User } from '../../api/UserUtilities';
import LoadingOverlay from '../../component/loading/LoadingOverlay';

const Destination = () => {
  const [loading, setLoading] = useState(true);
  const [loading_more, setLoading_more] = useState(false);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [result_pag, setResult_pag] = useState([]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    loadData()
  }, []);
  
  // get all data from api
  const loadData=()=>{
    User.getDestinationData().then(res=>{
      console.log('getDestinationData: ',JSON.stringify(res))
      setLoading(false)
      if(res){
        var arr = res
        setData(arr);
      }
     })
  }

  // on search function and determine 10 item only to show
  const onSearch=(text)=>{
    const newData=[]
      data.forEach(element => {
        if((element.name).includes(text)){
          newData.push(element)
        }
      });
      setResult(newData)
      const newData2=[]
      // check the length of result data more than 10 or not
      const limit= newData.length>=10?10:newData.length
    for (let index = 0; index < limit; index++) {
        const obj = {
          name: newData[index]?.name,
          country: newData[index]?.country,
          latitude: newData[index]?.lat,
          longitude: newData[index]?.lng,
         }
         newData2.push(obj)
       }
       setResult_pag(newData2);
       setCount(20)
  }

// load more data (icrease 10 item)
  const moreData=(number, data)=>{
      const list=[]
    for (let index = 0; index < number; index++) {
        const obj = {
          name: data[index]?.name,
          country: data[index]?.country,
          latitude: data[index]?.lat,
          longitude: data[index]?.lng,
         }
         list.push(obj)
       }
       setResult_pag(list);
       setLoading_more(false)
       // check if reached to the last item in list and determine pagination count
       if((result.length-count)>=10){
        setCount(count+10)
       }else{
        setCount(count+(result.length-count))
       }
  }
 // render search view
  const renderSearch=()=>{
   return(
    <View style={styles.input}>
    <Input
     placeholder={'Search'}
     underlineColorAndroid="transparent"
     autoFocus
     inputContainerStyle={{borderBottomWidth:0}}
     containerStyle={{height:Dimensions.DEVICE_HEIGHT*0.07}}
     style={styles.label_style}
     leftIcon={
       <Icon
        name='search'
        type="feather"
        size={Dimensions.DEVICE_HEIGHT*0.02}
        color={Colors.textSubtitle}
      />
     }
     onChangeText={(value=> {
       if(value){
        onSearch(value)
       }else{
         setResult_pag([])
       }
       })}/>
   </View>
   )
  }
  // render list
  const renderList=()=>{
    return(
      <List data={result_pag} isDestination={true} 
        onEndReach={()=>{ 
          if(result.length > count){
            // use timeout to show loading pagination
            setLoading_more(true)
            clearTimeout(timeout);
            let timeout = setTimeout(() => {
                moreData(count,result)
            }, 1000);
        }
        }} loadingMore={loading_more}/>
    )
  }
  return (
    <View style={styles.container}>
     {renderSearch()}
     {loading? <LoadingOverlay/> : renderList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  input:{
    width:Dimensions.DEVICE_WIDTH*0.9,
    height:Dimensions.DEVICE_HEIGHT*0.07,
    marginTop: Dimensions.DEVICE_HEIGHT*0.05,
    backgroundColor:Colors.white,
    borderRadius:6,
    alignItems:'flex-start'
  },
  label_style:{
    fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
    fontFamily: Fonts.CairoBold,
    fontWeight: '200',
    height: Dimensions.DEVICE_HEIGHT*0.07,
    textAlign: 'left',
    marginHorizontal: Dimensions.DEVICE_WIDTH*0.015
  },
});

export default Destination;
