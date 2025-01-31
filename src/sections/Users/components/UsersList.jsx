import UserListItem from "./UsersListItem"

function UserList({dataList}){
    
    
    if(dataList){
        return(
            <ul className ="users-list">
              
            {dataList.map((dataItem,index)=>( <UserListItem key={index} info={dataItem}/>))}
            
            </ul>
            )
    }


}

export default UserList