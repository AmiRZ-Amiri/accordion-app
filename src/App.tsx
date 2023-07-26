import {Question} from 'phosphor-react'
import {ReactElement  , FC , useState} from 'react';
import Accordion from './Accordion/Accordion';
import text from './text-list';
import { QuestionProps } from './App.type';
import './App.css'
const  App : FC= ():ReactElement =>{
  const [questions, setQuestions] = useState<QuestionProps[]>(text); 

  return(
    <div className='mother'>
      <div className="App">
        <div className="Titel-App">
          <div className="icon"><Question size={32} /></div>
            <h2 className="titel">پرسش‌های متداول</h2>
        </div>
        <div className="common qu">
            {questions.map((question) => {
              return <Accordion key={question.id} {...question} />
            })}
        </div>
      </div>
    </div>
  )
}
export default App 


  