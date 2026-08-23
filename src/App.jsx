import { useState } from 'react'
import DeskBackground from './components/layouts/DeskBackground'
import AboutMe from './sections/AboutMe/AboutMe'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Project from './sections/Projects/Project'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'
import Career from './sections/Career/Career'

function App() {

  const captions = [
    "서장 - 이야기를 시작합니다.",
    "1장 - 자기소개",
    "2장 - 기술역량",
    "3장 - 프로젝트",
    "4장 - 경력",
    "5장 - 경험",
    "종장 - 방문해주셔서 감사드립니다."
  ]

  return (
    <>
      <DeskBackground captions={captions[0]}><Hero /></DeskBackground>
      <DeskBackground captions={captions[1]}><AboutMe /></DeskBackground>
      <DeskBackground captions={captions[2]}><Skills/></DeskBackground>
      <DeskBackground captions={captions[3]}><Project/></DeskBackground>
      <DeskBackground captions={captions[4]}><Career/></DeskBackground>
      <DeskBackground captions={captions[5]}><Experience/></DeskBackground>
      <DeskBackground captions={captions[6]}><Contact/></DeskBackground>
    </>
  )
}

export default App