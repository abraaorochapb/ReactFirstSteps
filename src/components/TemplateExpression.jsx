import React from 'react'

const TemplateExpression = () => {
  const name = 'Abraao'

  const data = {
    age : 20,
    studyPoint : 'Desenvolvimento de Software'
  }
  return (
    <div>
      <p>Este é um codigo javascript: {2+2}</p>
      <h3>Me chamo {name}</h3>
      <p>Possuo {data.age} anos e estudo {data.studyPoint}</p>
    </div>
  )
}

export default TemplateExpression