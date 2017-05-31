import React from 'react';

export const Answers = ({ans, id}) => {
console.log(ans)
  const answers = ans.map((answer, index) => {


    console.log('ANSWER:',answer)
    return(
      <div key={index}>
        <p><input type='radio' name={`radio${id}`}/>{answer.title}</p>
      </div>
    )
  })

  return(
    <div>
    {answers}
    </div>
  )
}
