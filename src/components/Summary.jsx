import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from "../questions"
export default function Summary({ userAnswers }) {
const skippedAnswers = userAnswers.filter(answer => answer === null)
const correctAnswers = userAnswers.filter((answer, idx) => answer === QUESTIONS[idx].answers[0])

const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
);

const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
);

const wrongAnswersShare = 100% - (skippedAnswersShare + correctAnswersShare)

    return <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedAnswersShare}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnswersShare}%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnswersShare}%</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map(
                (answer, idx) => {

                    let cssClass = 'user-answer'
                    if (answer === null) {
                        cssClass += ' skipped'

                    } else if (answer === QUESTIONS[idx].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'

                    }
                    return <li key={idx}>
                        <h3>{idx + 1}</h3>
                        <p className='question'>{QUESTIONS[idx].text}</p>
                        <p className={cssClass}>{answer ?? "Sklipped"}</p>
                    </li>
                }
            )}

        </ol>
    </div>

}