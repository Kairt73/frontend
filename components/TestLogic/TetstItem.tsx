import { Question } from "./Test"
import styles from './test.module.css';

interface Props {
    question: Question,
    click: (index: number) => void
    check: (questionNumber: number, index: number) => void
    currentQuestion: number
}

export const TetstItem = ({question, click, check, currentQuestion}: Props) => {
  const list = JSON.parse(question.answer_list) as string[];
    
  return (
    <div className={styles.test_answer}>
        {list.map((answer, index) => (
          <div
            key={index}
            className={`${styles.checkbox} ${check(currentQuestion, index)}`}
            onClick={() => click(index)}
          >
            {answer}
          </div>
        ))}
      </div>
  )
}
