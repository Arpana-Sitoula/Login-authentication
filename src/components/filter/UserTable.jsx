import React from 'react'
import Category from '../filter/Category';
import UserData from '../filter/UserData';

const UserTable = ({ user, filterText }) => {
   const rows = []; 
   let lastGender = null;

   user.forEach((data) =>{
        if(data.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1){
           return;
        }
        if(data.gender !== lastGender){
            rows.push(
                <Category
                gender = {data.gender}
                key = {data.gender}/>
            );
        }
        rows.push(
            <UserData
            data = {data}
            key = {data.name}/>
        );
        lastGender = data.gender;
   });
 
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Expertise</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default UserTable;