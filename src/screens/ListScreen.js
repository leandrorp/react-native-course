import React from 'react';
import { Text, FlatList } from 'react-native';


const ListScreen = () => {

    const friends = [
         { name : 'Friend'},
         { name : 'Friend2 '},
         { name : 'Friend3 '},

    ]

    return (
        <FlatList 
            data={friends } 
            renderItem={({item}) => { 
                    return <Text>{item.name}</Text>
            }}
        />
    )

}


export default ListScreen;