import React from 'react'
import FilterUserTable from './FilterUserTable'

const USER = [
    {gender: "Male", name: "Abishek", available: false, stack: "AI"},
    {gender: "Male", name: "Aasish", available: true, stack: "Database"},
    {gender: "Male", name: "Nirajan", available: true, stack: "UI/UX"},
    {gender: "Male", name: "Yogesh", available: false, stack: "QA"},
    {gender: "Male", name: "Ken", available: false, stack: "Java"},
    {gender: "Male", name: "Nirvana", available: true, stack: "Flutter"},
    {gender: "Female", name: "Arpana", available: true, stack: ".net"},
    {gender: "Female", name: "Chandra", available: false, stack: "React"},
    {gender: "Female", name: "Dharana", available: true, stack: "Python"},
    {gender: "Female", name: "Gato", available: false, stack: "Angular"}
]

const Single = () => {
  return (
    <div><FilterUserTable user={USER}/></div>
  )
}

export default Single