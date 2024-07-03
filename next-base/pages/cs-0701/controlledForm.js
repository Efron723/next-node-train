import { useState } from 'react'
import MyInputText from '@/components/controlled-form/myInput'
import MyTextarea from '@/components/controlled-form/myTextarea'
import MyRadio from '@/components/controlled-form/myRadio'
import MyCheckbox from '@/components/controlled-form/myCheckbox'
import MySelect from '@/components/controlled-form/mySelect'

export default function ControlledForm() {
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      <MyInputText />
      <MyTextarea />
      <MyRadio />
      <MyCheckbox />
      <MySelect />
    </>
  )
}
